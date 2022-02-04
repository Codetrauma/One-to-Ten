from flask import Blueprint, jsonify
from app.models import Questions


question_routes = Blueprint('questions', __name__)

@question_routes.route('/')
def questions():
    questions = Questions.query.all()
    return {'questions': [question.to_dict() for question in questions]}

@question_routes.route('/<int:id>')
def question(id):
    question = Questions.query.get(id)
    return question.to_dict()
