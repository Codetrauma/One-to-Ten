from .db import db
from .surveys import Surveys
from .question_stats import QuestionStats



class Questions(db.Model):
  __tablename__ = 'questions'

  id = db.Column(db.Integer, primary_key=True)
  weight = db.Column(db.Numeric, nullable=False)
  text = db.Column(db.String, nullable=False, unique=True)
  one_label = db.Column(db.String, nullable=False)
  ten_label = db.Column(db.String, nullable=False)
  survey_id = db.Column(db.Integer, db.ForeignKey('surveys.id'), nullable=False)

  question = db.relationship('Surveys', back_populates='survey', cascade='all')
  question_stats = db.relationship('QuestionStats', back_populates='stats', uselist=False, cascade='all, delete-orphan')
  question_responses = db.relationship('QuestionResponses', back_populates='q_responses', cascade='all, delete-orphan')
