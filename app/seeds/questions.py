from app.models import db, Questions


def seed_questions():
  demo_question = Questions(weight=3, text='How much do you like this survey?', one_label='Not at all', ten_label='Extremely', survey_id=1)
  demo_question_2 = Questions(weight=5, text='How much do you like this second survey?', one_label='Not at all', ten_label='Extremely', survey_id=2)
  demo_question_3 = Questions(weight=8, text='How much do you like this third survey?', one_label='Not at all', ten_label='Extremely', survey_id=2)
  demo_question_4 = Questions(weight=10, text='How much do you like this fourth survey?', one_label='Not at all', ten_label='Extremely', survey_id=2)
  demo_question_5 = Questions(weight=12, text='How much do you like this fifth survey?', one_label='Not at all', ten_label='Extremely', survey_id=2)
  demo_question_6 = Questions(weight=14, text='How much do you like this sixth survey?', one_label='Not at all', ten_label='Extremely', survey_id=2)

  db.session.add(demo_question)
  db.session.add(demo_question_2)
  db.session.add(demo_question_3)
  db.session.add(demo_question_4)
  db.session.add(demo_question_5)
  db.session.add(demo_question_6)
  db.session.commit()

def undo_questions():
  db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
  db.session.commit()
