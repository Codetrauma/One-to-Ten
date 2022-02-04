from .db import db


class SurveyResponses(db.Model):
  __tablename__ = 'survey_responses'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
  survey_id = db.Column(db.Integer, db.ForeignKey('surveys.id'), nullable=False)

  u_s_responses = db.relationship('User', back_populates='user_survey_responses', cascade='all')
  s_responses = db.relationship('Surveys', back_populates='survey_responses', cascade='all')

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'survey_id': self.survey_id
    }
