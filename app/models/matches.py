from .db import db




class Matches(db.Model):
  __tablename__ = 'matches'

  id = db.Column(db.Integer, primary_key=True)
  compatibility_score = db.Column(db.Numeric, nullable=False)

  user_1_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  user_2_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  most_similar_score = db.Column(db.Numeric, default=-100)
  least_similar_score = db.Column(db.Numeric, default=100)


  most_similar_id = db.Column(db.Integer, db.ForeignKey('surveys.id'), default=1)
  least_similar_id = db.Column(db.Integer, db.ForeignKey('surveys.id'), default=1)


  user1 = db.relationship('User', foreign_keys=[user_1_id])
  user2 = db.relationship('User', foreign_keys=[user_2_id])
  # most_similar = db.relationship('Survey', foreign_keys=[most_similar_id])
  # least_similar = db.relationship('Survey', foreign_keys=[least_similar_id])


  def to_dict(self):
    return {
      'id': self.id,
      'compatibility_score': str(self.compatibility_score),
      'user_1_id': self.user_1_id,
      'user_2_id': self.user_2_id,
      # 'most_similar_score': self.most_similar_score,
      # 'least_similar_score': self.least_similar_score,
      'most_similar_id': self.most_similar_id,
      'least_similar_id': self.least_similar_id,
    }
