from app.models import db, Surveys



def seed_surveys():
  demo_survey = Surveys(name='Demo Survey')
  new_survey = Surveys(name='New Survey')
  

  db.session.add(demo_survey)
  db.session.commit()


def undo_surveys():
  db.session.execute('TRUNCATE surveys RESTART IDENTITY CASCADE;')
  db.session.commit()
