from flask import Blueprint
from app.models import db, Questions


question_routes = Blueprint('questions', __name__)

@question_routes.route('/')
def questions():
    questions = Questions.query.all()
    return {'questions': [question.to_dict() for question in questions]}

@question_routes.route('/<int:id>')
def question(id):
    question = Questions.query.get(id)
    return question.to_dict()

@question_routes.route('/<int:id>/stats')
def question_stats(id):
    question = Questions.query.get(id)
    return question.question_stats.to_dict()

@question_routes.route('/<int:id>/users')
def question_users(id):
    question = Questions.query.get(id)
    return {'users': [user.to_dict() for user in question.question_responses]}

@question_routes.route('/<int:id>/users/<int:user_id>')
def question_user(id, user_id):
    question = Questions.query.get(id)
    return {'user': [user.to_dict() for user in question.question_responses if user.user_id == user_id]}

@question_routes.route('/<int:id>/stats', methods=['PUT'])
def question_stats_update(id):
    question = Questions.query.get(id)
    new_response_count = question.question_stats.response_count + 1
    question.question_stats.average = (question.question_stats.response_count * question.question_stats.average) / new_response_count
    question.question_stats.response_count = new_response_count
    db.session.commit()
    return question.question_stats.to_dict()
