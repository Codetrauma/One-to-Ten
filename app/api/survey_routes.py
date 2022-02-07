from flask import Blueprint
from app.models import db, Surveys, SurveyResponses, Questions, QuestionStats
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
    if form.validate_on_submit():
        data = form.data
        new_survey = QuestionResponses(response=data['response'],
                                       user_id=user_id,
                                       question_id=data['question_id'])
        db.session.add(new_survey)
    db.session.add(new_survey_response)
    db.session.commit()

@survey_routes.route('/<int:id>/users/<int:user_id>/responses', methods=['PUT'])
def survey_user_response_update(id, user_id):
    return



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
