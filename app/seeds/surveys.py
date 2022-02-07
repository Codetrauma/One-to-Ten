from app.models import db, Surveys



def seed_surveys():
  demo_survey = Surveys(name='Demo Survey')
  new_survey = Surveys(name='New Survey')
  new_survey_2 = Surveys(name='New Survey 2')

  db.session.add(demo_survey)
  db.session.add(new_survey)
  db.session.add(new_survey_2)
  db.session.commit()


def undo_surveys():
  db.session.execute('TRUNCATE surveys RESTART IDENTITY CASCADE;')
  db.session.commit()
