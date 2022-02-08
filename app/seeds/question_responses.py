from app.models import db, QuestionResponses



def seed_question_responses():
  # demo_question_response = QuestionResponses(response=2, user_id=1, question_id=1)
  # new_question_response_1 = QuestionResponses(response=6, user_id=3, question_id=2)
  # new_question_response_2 = QuestionResponses(response=8, user_id=2, question_id=2)
  # new_question_response_3 = QuestionResponses(response=5, user_id=3, question_id=5)
  # new_question_response_4 = QuestionResponses(response=4, user_id=2, question_id=5)
  # new_question_response_5 = QuestionResponses(response=3, user_id=1, question_id=6)
  # new_question_response_6 = QuestionResponses(response=1, user_id=3, question_id=6)
  # new_question_response_6 = QuestionResponses(response=1, user_id=1, question_id=6)
  # new_question_response_7 = QuestionResponses(response=5, user_id=2, question_id=4)

  # db.session.add(demo_question_response)
  # db.session.add(new_question_response_1)
  # db.session.add(new_question_response_2)
  # db.session.add(new_question_response_3)
  # db.session.add(new_question_response_4)
  # db.session.add(new_question_response_5)
  # db.session.add(new_question_response_6)
  # db.session.add(new_question_response_7)

  question_response_01 = QuestionResponses(response=2, user_id=1, question_id=4)
  question_response_02 = QuestionResponses(response=3, user_id=1, question_id=5)
  question_response_03 = QuestionResponses(response=5, user_id=1, question_id=6)
  question_response_04 = QuestionResponses(response=1, user_id=1, question_id=7)
  question_response_05 = QuestionResponses(response=10, user_id=1, question_id=8)
  question_response_06 = QuestionResponses(response=9, user_id=1, question_id=9)
  question_response_07 = QuestionResponses(response=3, user_id=2, question_id=7)
  question_response_08 = QuestionResponses(response=5, user_id=2, question_id=8)
  question_response_09 = QuestionResponses(response=1, user_id=2, question_id=9)

  db.session.add(question_response_01)
  db.session.add(question_response_02)
  db.session.add(question_response_03)
  db.session.add(question_response_04)
  db.session.add(question_response_05)
  db.session.add(question_response_06)
  db.session.add(question_response_07)
  db.session.add(question_response_08)
  db.session.add(question_response_09)

  db.session.commit()

def undo_question_responses():
  db.session.execute('TRUNCATE question_responses RESTART IDENTITY CASCADE;')
  db.session.commit()
