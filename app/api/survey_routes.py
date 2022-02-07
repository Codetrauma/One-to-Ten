from flask import Blueprint
from app.models import db, Surveys, SurveyResponses, Questions, QuestionStats
from app.models.question_responses import QuestionResponses


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
        question_responses = QuestionResponses.query.filter(QuestionResponses.question_id == question.id).all()
        for response in question_responses:
            if response.user_id == user_id:
                print("RESPONSE!!!!!!!!!!!!!!!!!!", response.to_dict())
                return response.to_dict()
            else:
                return {"message": "No responses for this user"}


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
