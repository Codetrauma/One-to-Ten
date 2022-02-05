from flask import Blueprint
from app.models import db, Surveys, SurveyResponses


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
    return {'questions': [question.to_dict() for question in survey.questions]}

@survey_routes.route('/<int:id>/users/<int:user_id>')
def survey_user(id, user_id):
    survey = Surveys.query.get(id)
    return {'user': [user.to_dict() for user in survey.survey_responses if user.user_id == user_id]}

@survey_routes.route('/<int:id>/users/<int:user_id>', methods=['DELETE'])
def survey_user_delete(id, user_id):
    survey = Surveys.query.get(id)
    user = SurveyResponses.query.get(user_id)
    db.session.delete(user)
    db.session.commit()
    
