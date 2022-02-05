from app.models import db, QuestionStats


def seed_question_stats():
  demo_question_stats = QuestionStats(response_count=3, average=1.5, question_id=1)
  demo_question_stats_2 = QuestionStats(response_count=5, average=2.5, question_id=2)
  demo_question_stats_3 = QuestionStats(response_count=8, average=3.5, question_id=3)

  db.session.add(demo_question_stats)
  db.session.add(demo_question_stats_2)
  db.session.add(demo_question_stats_3)
  db.session.commit()

def undo_question_stats():
  db.session.execute('TRUNCATE question_stats RESTART IDENTITY CASCADE;')
  db.session.commit()
