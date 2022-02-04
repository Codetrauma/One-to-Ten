from .db import db
from .questions import Questions


class QuestionResponses(db.Model):
  __tablename__ = 'question_responses'

  id = db.Column(db.Integer, primary_key=True)
  response = db.Column(db.Numeric, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
  question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)

  u_q_responses = db.relationship('User', back_populates='user_question_responses', cascade='all')
  q_responses = db.relationship('Questions', back_populates='question_responses', cascade='all')
