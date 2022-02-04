from app.models import db, Questions


def seed_questions():
  demo_question = Questions(weight=3, text='How much do you like this survey?', one_label='Not at all', ten_label='Extremely', survey_id=1)
  demo_question_2 = Questions(weight=3, text='How much do you like this next survey?', one_label='Not at all', ten_label='Extremely', survey_id=2)


def undo_questions():
  db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
  db.session.commit()
