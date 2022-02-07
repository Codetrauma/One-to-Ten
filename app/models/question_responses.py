from .db import db


class QuestionResponses(db.Model):
  __tablename__ = 'question_responses'

  id = db.Column(db.Integer, primary_key=True)
  response = db.Column(db.Numeric, nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
  question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), nullable=False)

  u_q_responses = db.relationship('User', back_populates='user_question_responses')
  q_responses = db.relationship('Questions', back_populates='question_responses')

  def to_dict(self):
    return {
      'id': self.id,
      'response': str(self.response),
      'user_id': self.user_id,
      'question_id': self.question_id
    }
