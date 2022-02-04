from app.models import db, QuestionResponses



def seed_question_responses():
  demo_question_response = QuestionResponses(response=2, user_id=1, question_id=1)
  new_question_response_1 = QuestionResponses(response=6, user_id=3, question_id=2)
  new_question_response_2 = QuestionResponses(response=8, user_id=2, question_id=3)

  db.session.add(demo_question_response)
  db.session.add(new_question_response_1)
  db.session.add(new_question_response_2)
  db.session.commit()

def undo_question_responses():
  db.session.execute('TRUNCATE question_responses RESTART IDENTITY CASCADE;')
  db.session.commit()
