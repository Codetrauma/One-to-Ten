from flask import Blueprint
from app.models import db, Surveys, SurveyResponses, Questions, Matches, QuestionStats, User
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
    questions = Questions.query.filter(Questions.survey_id == id).all()
    for question in questions:
        question_responses = QuestionResponses.query.filter(QuestionResponses.question_id == question.id, QuestionResponses.user_id == user_id).all()
        for questions in question_responses:
            return questions.to_dict()
    return {'message': 'No responses found'}

@survey_routes.route('/<int:id>/users/<int:user_id>/responses', methods=['POST'])
def survey_user_response(id, user_id):
    new_survey_response = SurveyResponses(user_id=user_id, survey_id=id)
    form = SurveyForm()
    # if form.validate_on_submit():
    data = form.data
    new_survey = QuestionResponses(response=data['response'],
                                   user_id=user_id,
                                   question_id=data['question_id'])
    db.session.add(new_survey)
    db.session.commit()
    all_users = User.query.filter(User.id != user_id).all()
    for user in all_users:
        print('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', data['question_id'])
        current_user = QuestionResponses.query.filter(QuestionResponses.user_id == user_id, QuestionResponses.question_id == data['question_id']).first().response
        second_user = QuestionResponses.query.filter(QuestionResponses.user_id == user.id, QuestionResponses.question_id == data['question_id']).first().response
        print('????????????????????????????????????????????????', second_user)
        average = QuestionStats.query.filter(QuestionStats.question_id == form.data['question_id']).first().average
        if second_user:
            new_match = Matches(user_1_id=user_id, user_2_id=user.id, compatibility_score=(current_user - average) * (second_user - average))
        # new_match = Matches(user_1_id=user_id, user_2_id=user.id,
        #                     compatibility_score=(QuestionResponses.query.filter(QuestionResponses.user_id == user_id, QuestionResponses.question_id == data['question_id']).first().response - QuestionStats.query.filter(QuestionStats.question_id == data['question_id']).first().average) * (QuestionResponses.query.filter(QuestionResponses.user_id == user.id, QuestionResponses.question_id == data['question_id']).first().response - QuestionStats.query.filter(QuestionStats.question_id == data['question_id']).first().average))
            db.session.add(new_match)
        else:
            return {'message': 'No second user found'}
    question_stats = QuestionStats.query.filter(QuestionStats.question_id == form.data['question_id']).first()

    question_stats.response_count += 1
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
        question_stats = QuestionStats.query.filter(QuestionStats.question_id == question.id)
        for question_stat in question_stats:
            question_stat.response_count -= 1
        db.session.delete(question_response)
    db.session.delete(survey)
    db.session.commit()
    return {"message": "Survey Response deleted"}
