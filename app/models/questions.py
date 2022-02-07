from .db import db



class Questions(db.Model):
  __tablename__ = 'questions'

  id = db.Column(db.Integer, primary_key=True)
  weight = db.Column(db.Numeric, nullable=False)
  text = db.Column(db.String, nullable=False, unique=True)
  one_label = db.Column(db.String, nullable=False)
  ten_label = db.Column(db.String, nullable=False)
  survey_id = db.Column(db.Integer, db.ForeignKey('surveys.id'), nullable=False)

  question = db.relationship('Surveys', back_populates='survey')
  question_stats = db.relationship('QuestionStats', back_populates='stats', uselist=False, cascade='all, delete-orphan')
  question_responses = db.relationship('QuestionResponses', back_populates='q_responses', cascade='all, delete-orphan')



  def to_dict(self):
    return {
      'id': self.id,
      'weight': str(self.weight),
      'text': self.text,
      'one_label': self.one_label,
      'ten_label': self.ten_label,
      'survey_id': self.survey_id
    }
