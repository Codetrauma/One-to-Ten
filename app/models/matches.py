from .db import db




class Matches(db.Model):
  __tablename__ = 'matches'

  id = db.Column(db.Integer, primary_key=True)
  compatibility_score = db.Column(db.Numeric, nullable=False)
  user_1_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  user_2_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  user1 = db.relationship('User', foreign_keys=[user_1_id], cascade='all')
  user2 = db.relationship('User', foreign_keys=[user_2_id], cascade='all')
