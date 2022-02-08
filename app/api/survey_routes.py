from flask import Blueprint, request
from app.models import db, Surveys, SurveyResponses, Questions, QuestionStats, Matches, User
from app.models.question_responses import QuestionResponses
from app.forms import SurveyForm

survey_routes = Blueprint('surveys', __name__)

@survey_routes.route('/')
def surveys():
    surveys = Surveys.query.all()
    return {'surveys': [survey.to_dict() for survey in surveys]}

@survey_routes.route('/<int:id>')
def survey(id):
    survey = Surveys.query.get(id)
    return survey.to_dict()

@survey_routes.route('/<int:id>/questions')
def survey_questions(id):
    survey = Surveys.query.get(id)
    return {'questions': [question.to_dict() for question in survey.survey]}


@survey_routes.route('/<int:id>/users/<int:user_id>/responses')
def survey_user(id, user_id):
    all_questions_dict = {}
    questions = Questions.query.filter(Questions.survey_id == id).all()
    for question in questions:
        question_responses = QuestionResponses.query.filter(QuestionResponses.user_id == user_id, QuestionResponses.question_id == question.id).all()
        all_questions_dict[question.id] = [response.to_dict() for response in question_responses]
    return {'questions': all_questions_dict}

@survey_routes.route('/<int:id>/users/<int:user_id>/responses', methods=['POST'])
def survey_user_response(id, user_id):
    request_body_list = request.json['question_responses']
    new_survey_response = SurveyResponses(user_id=user_id, survey_id=id)
    for responses in request_body_list:
        question_id = responses['question_id']
        response = responses['value']
        print('questions', question_id, 'response', response)
        validate = QuestionResponses.query.filter(QuestionResponses.user_id == user_id, QuestionResponses.question_id == question_id).all()
        for something in validate:
            db.session.delete(something)
        new_question_response = QuestionResponses(response=response,
                               user_id=user_id,
                               question_id=question_id)
        question_stats = QuestionStats.query.filter(QuestionStats.question_id == question_id).first()
        question = Questions.query.get(question_id)
        new_response_count = question.question_stats.response_count + 1
        question.question_stats.average = (question.question_stats.response_count * question.question_stats.average) / new_response_count
        question_stats.response_count += 1
        db.session.add(new_question_response)
    user_to_match = Matches.query.filter(Matches.user_1_id == user_id).all()
    for match in user_to_match:
        previous_compatibility_score = match.compatibility_score
        compatibility_modification = 0
        for questions in request_body_list:
            question_id = questions['question_id']
            current_user_response = questions['value']
            second_user = QuestionResponses.query.filter(QuestionResponses.user_id == match.user_2_id, QuestionResponses.question_id == question_id).first()
            average = QuestionStats.query.filter(QuestionStats.question_id == question_id).first().average

            if second_user and second_user.response:
                question_compatibility = (current_user_response - average) * (second_user.response - average)
                compatibility_modification += question_compatibility
        match.compatibility_score = compatibility_modification + previous_compatibility_score
    second_user_to_match = Matches.query.filter(Matches.user_2_id == user_id).all()
    for match in second_user_to_match:
        previous_compatibility_score = match.compatibility_score
        compatibility_modification = 0
        for questions in request_body_list:
            question_id = questions['question_id']
            current_user_response = questions['value']
            second_user = QuestionResponses.query.filter(QuestionResponses.user_id == match.user_1_id, QuestionResponses.question_id == question_id).first()
            average = QuestionStats.query.filter(QuestionStats.question_id == question_id).first().average
            if second_user and second_user.response:
                question_compatibility = (current_user_response - average) * (second_user.response - average)
                compatibility_modification += question_compatibility
        match.compatibility_score = compatibility_modification + previous_compatibility_score
    db.session.add(new_survey_response)
    db.session.commit()
    return {"message": "Success"}

@survey_routes.route('/<int:id>/users/<int:user_id>/responses', methods=['PUT'])
def survey_user_response_update(id, user_id):
    form = SurveyForm()
    question = QuestionResponses.query.get(form.data['question_id'])
    question.response = form.data['response']
    db.session.add(question)
    db.session.commit()
    return {"message": "Success"}



@survey_routes.route('/<int:id>/users/<int:userId>', methods=['DELETE'])
def survey_user_delete(id, userId):
    survey = SurveyResponses.query.filter(SurveyResponses.survey_id == id, SurveyResponses.user_id == userId).first()
    questions = Questions.query.filter(Questions.survey_id == id).all()
    for question in questions:
        question_response = QuestionResponses.query.filter(QuestionResponses.question_id == question.id, QuestionResponses.user_id == userId).first()
        if question_response:
            db.session.delete(question_response)
        else:
            return {"message": "No response found"}
        question_stats = QuestionStats.query.filter(QuestionStats.question_id == question.id)
        for question_stat in question_stats:
            question_stat.response_count -= 1
    db.session.delete(survey)
    db.session.commit()
    return {"message": "Survey Response deleted"}
