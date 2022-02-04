from app.models import db, SurveyResponses


def seed_survey_responses():
  demo_survey_response = SurveyResponses(user_id=1, survey_id=1)
  new_survey_response_1 = SurveyResponses(user_id=3, survey_id=2)
  new_survey_response_2 = SurveyResponses(user_id=2, survey_id=3)

  db.session.add(demo_survey_response)
  db.session.add(new_survey_response_1)
  db.session.add(new_survey_response_2)
  db.session.commit()

def undo_survey_responses():
  db.session.execute('TRUNCATE survey_responses RESTART IDENTITY CASCADE;')
  db.session.commit()
