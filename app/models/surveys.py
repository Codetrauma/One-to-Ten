from .db import db


class Surveys(db.Model):
  __tablename__ = 'surveys'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False, unique=True)

  survey = db.relationship('Questions', back_populates='question', cascade='all, delete-orphan')
  survey_responses = db.relationship('SurveyResponses', back_populates='s_responses', cascade='all, delete-orphan')

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name
    }
