from pkg_resources import compatible_platforms
from app.models import db, Matches


def seed_matches():
  demo_match = Matches(compatibility_score=5.5, user_1_id=2, user_2_id=1)
  new_match = Matches(compatibility_score=2.3, user_1_id=1, user_2_id=3)
  new_match_2 = Matches(compatibility_score=3.8, user_1_id=2, user_2_id=3)
  new_match_3 = Matches(compatibility_score=4.5, user_1_id=3, user_2_id=2)
  new_match_4 = Matches(compatibility_score=5.0, user_1_id=1, user_2_id=2)
  new_match_5 = Matches(compatibility_score=5.0, user_1_id=3, user_2_id=1)

  db.session.add(demo_match)
  db.session.add(new_match)
  db.session.add(new_match_2)
  db.session.add(new_match_3)
  db.session.add(new_match_4)
  db.session.add(new_match_5)
  db.session.commit()

def undo_matches():
  db.session.execute('TRUNCATE matches RESTART IDENTITY CASCADE;')
  db.session.commit()
