from .db import db


class QuestionStats(db.Model):
  __tablename__ = 'question_stats'

  id = db.Column(db.Integer, primary_key=True)
  response_count = db.Column(db.Integer, nullable=False)
  average = db.Column(db.Numeric, nullable=False)
  question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)

  stats = db.relationship('Questions', back_populates='question_stats', cascade='all')
