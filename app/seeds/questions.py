from app.models import db, Questions


def seed_questions():

  # basic
  survey_01_q1 = Questions(
    weight=1,
    text='I prefer cats over dogs.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=1
    )

  survey_01_q2 = Questions(
    weight=1,
    text='I am a person who is very open to new ideas an experiences.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=1
  )

  survey_01_q3 = Questions(
    weight=1,
    text='To feel at ease, I need to be in a position of control.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=1
  )

  # friendship
  survey_02_q1 = Questions(
    weight=1,
    text='I consider my friends as family.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=2
  )

  survey_02_q2 = Questions(
    weight=1,
    text='I am always making an effort to meet new people.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=2
  )

  survey_02_q3 = Questions(
    weight=1,
    text='Being around friends energizes me.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=2
  )

  # privacy
  survey_03_q1 = Questions(
    weight=1,
    text='I prefer keeping most things about myself private, even from those around me.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=3
  )

  survey_03_q2 = Questions(
    weight=1,
    text='I have no problems keeping secrets for other people.',
    one_label='Never',
    ten_label='Always',
    survey_id=3
  )

  survey_03_q3 = Questions(
    weight=1,
    text='Social media sites take away too much individual privacy.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=3
  )

  # religion
  survey_04_q1 = Questions(
    weight=1,
    text='It is important that my partner is religious.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=4
  )

  survey_04_q2 = Questions(
    weight=1,
    text='Religion plays a significant role in my day to day life.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=4
  )

  survey_04_q3 = Questions(
    weight=1,
    text='I form close relationships with people of different religious beliefs.',
    one_label='Never',
    ten_label='Always',
    survey_id=4
  )

  # planning
  survey_05_q1 = Questions(
    weight=1,
    text='I am always the first to arrive to social gatherings.',
    one_label='Never',
    ten_label='Sometimes',
    survey_id=5
  )

  survey_05_q2 = Questions(
    weight=1,
    text='I know exactly what is on my schedule for this week.',
    one_label='False',
    ten_label='True',
    survey_id=5
  )

  survey_05_q3 = Questions(
    weight=1,
    text='Setting a structured schedule for myself each day would make me feel...',
    one_label='Overwhelmed',
    ten_label='Uncomfortable',
    survey_id=5
  )

 # style
  survey_06_q1 = Questions(
    weight=1,
    text='Regardless of whether I follow trends myself, I have a good idea of what items of clothing are fashionable.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=6
  )

  survey_06_q2 = Questions(
    weight=1,
    text='The way someone dresses affects my opinion of their character.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=6
  )

  survey_06_q3 = Questions(
    weight=1,
    text='I feel that my style of dress is closely tied to my identity.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=6
  )

 # conversaion
  survey_07_q1 = Questions(
    weight=1,
    text='I talk with my hands.',
    one_label='Never',
    ten_label='Always',
    survey_id=7
  )

  survey_07_q2 = Questions(
    weight=1,
    text='Whenever I receive a text message from a friend, I _____ respond immediately.',
    one_label='Never',
    ten_label='Always',
    survey_id=7
  )

  survey_07_q3 = Questions(
    weight=1,
    text='I prefer tochat over text than on the phone or in person.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=7
  )

 # fitness
  survey_08_q1 = Questions(
    weight=1,
    text='Working out is an essential part of my lifestyle.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=8
  )

  survey_08_q2 = Questions(
    weight=1,
    text='How in shape I am plays a large factor in how confident I feel about myself.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=8
  )

  survey_08_q3 = Questions(
    weight=1,
    text='I set specific health and fitness goals for myself.',
    one_label='Never',
    ten_label='Always',
    survey_id=8
  )

 # conflict
  survey_09_q1 = Questions(
    weight=1,
    text='I prefer resolving conflicts with others using direct confrontation.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=9
  )

  survey_09_q2 = Questions(
    weight=1,
    text='After an intense conversaion, I usually need to step away and have a cooling off period.',
    one_label='Never',
    ten_label='Always',
    survey_id=9
  )

  survey_09_q3 = Questions(
    weight=1,
    text='In the face of disagreement, I usually end up giving in to the other person in order to help keep the peace.',
    one_label='Never',
    ten_label='Always',
    survey_id=9
  )

 # education
  survey_10_q1 = Questions(
    weight=1,
    text='I think that level of education is a strong indicator of someone\'s level of intelligence.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=10
  )

  survey_10_q2 = Questions(
    weight=1,
    text='The people I typically surround myself with usually have a similar educational background as me.',
    one_label='False',
    ten_label='True',
    survey_id=10
  )

  survey_10_q3 = Questions(
    weight=1,
    text='I think it is important for young people today to get a college education.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=10
  )

 # marriage
  survey_11_q1 = Questions(
    weight=1,
    text='I feel that marriage is the strongest affirmation of a couple\'s relationship.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=11
  )

  survey_11_q2 = Questions(
    weight=1,
    text='It is important to me to be with someone with the same views on marriage as me.',
    one_label='False',
    ten_label='True',
    survey_id=11
  )

  survey_11_q3 = Questions(
    weight=1,
    text='I am at a point in my life where long-term compatibility is something I consider when meeting romantic partners.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=11
  )

 # leisure
  survey_12_q1 = Questions(
    weight=1,
    text='I would rather spend my free time relaxing at home instead of being out and about.',
    one_label='False',
    ten_label='True',
    survey_id=12
  )

  survey_12_q2 = Questions(
    weight=1,
    text='Whenever I have a free weekend, I spend that time hanging out with friends.',
    one_label='Never',
    ten_label='Always',
    survey_id=12
  )

  survey_12_q3 = Questions(
    weight=1,
    text='You can always find me at happy hour after work.',
    one_label='False',
    ten_label='True',
    survey_id=12
  )

 # finances
  survey_13_q1 = Questions(
    weight=1,
    text='I regularly set and adhere to specific spending budgets.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=13
  )

  survey_13_q2 = Questions(
    weight=1,
    text='I think about the amount of money I have in my bank account _____.',
    one_label='Rarely',
    ten_label='Constantly',
    survey_id=13
  )

  survey_13_q3 = Questions(
    weight=1,
    text='I am fine with making just enough money to lead a comfortable, stress-free life.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=13
  )

 # food
  survey_14_q1 = Questions(
    weight=1,
    text='I am always looking to try cuisines from cultures and countries other than my own.',
    one_label='False',
    ten_label='True',
    survey_id=14
  )

  survey_14_q2 = Questions(
    weight=1,
    text='If I had to choose between a new, exotic meal every day or my favorite food every day, I\'d rather eat only my favorite food for the rest of my life.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=14
  )

  survey_14_q3 = Questions(
    weight=1,
    text='I think I am a good cook.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=14
  )

 # music
  survey_15_q1 = Questions(
    weight=1,
    text='Listening to music while I work or study improves my productivity.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=15
  )

  survey_15_q2 = Questions(
    weight=1,
    text='I always have a music player open in my desktop background.',
    one_label='False',
    ten_label='True',
    survey_id=15
  )

  survey_15_q3 = Questions(
    weight=1,
    text='There are specific musical genres that I usually listen to.',
    one_label='False',
    ten_label='True',
    survey_id=15
  )

 # emotion
  survey_16_q1 = Questions(
    weight=1,
    text='I find it easy to communicate my thoughts and feelings to others.',
    one_label='False',
    ten_label='True',
    survey_id=16
  )

  survey_16_q2 = Questions(
    weight=1,
    text='If a friend of mine does not share their personal feelings with me, I feel like they don\'t consider me a close friend.',
    one_label='False',
    ten_label='True',
    survey_id=16
  )

  survey_16_q3 = Questions(
    weight=1,
    text='I get very uncomfortable when someone shares their worries and personal struggles with me.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=16
  )

 # health
  survey_17_q1 = Questions(
    weight=1,
    text='I make it a point to get a health checkup every year.',
    one_label='False',
    ten_label='True',
    survey_id=17
  )

  survey_17_q2 = Questions(
    weight=1,
    text='I am fine with paying more for groceries if I know that they are organic.',
    one_label='False',
    ten_label='True',
    survey_id=17
  )

  survey_17_q3 = Questions(
    weight=1,
    text='I like to incorporate specific things into my diet to stay healthy.',
    one_label='Never',
    ten_label='Always',
    survey_id=17
  )

 # aspirations
  survey_18_q1 = Questions(
    weight=1,
    text='I have grand ideas of how I want my future to look.',
    one_label='False',
    ten_label='True',
    survey_id=18
  )

  survey_18_q2 = Questions(
    weight=1,
    text='I know where I want to be 5 years from now.',
    one_label='False',
    ten_label='True',
    survey_id=18
  )

  survey_18_q3 = Questions(
    weight=1,
    text='I am happy with my current trajectory in life.',
    one_label='False',
    ten_label='True',
    survey_id=18
  )

 # holidays
  survey_19_q1 = Questions(
    weight=1,
    text='When I go home for the holidays, I usually reserve that time for family only.',
    one_label='False',
    ten_label='True',
    survey_id=19
  )

  survey_19_q2 = Questions(
    weight=1,
    text='I try to use non-denominational holiday greetings and terms when speaking to people I\'m not familiar with.',
    one_label='Never',
    ten_label='Always',
    survey_id=19
  )

  survey_19_q3 = Questions(
    weight=1,
    text='I would rather spend my holidays vacationing in another country than going home.',
    one_label='False',
    ten_label='True',
    survey_id=19
  )

 # arts
  survey_20_q1 = Questions(
    weight=1,
    text='I find art galleries and learning about art history interesting.',
    one_label='False',
    ten_label='True',
    survey_id=20
  )

  survey_20_q2 = Questions(
    weight=1,
    text='I have spent time thinking about how art can be a reflection of societal norms of the time.',
    one_label='False',
    ten_label='True',
    survey_id=20
  )

  survey_20_q3 = Questions(
    weight=1,
    text='I typically appreciate art simply for how it looks instead of spending time trying to dissect it.',
    one_label='False',
    ten_label='True',
    survey_id=20
  )

 # hobbies
  survey_21_q1 = Questions(
    weight=1,
    text='My hobbies usually involve something that I can do alone and away from other people.',
    one_label='False',
    ten_label='True',
    survey_id=21
  )

  survey_21_q2 = Questions(
    weight=1,
    text='My hobbies are activities that serve practical uses in my life.',
    one_label='False',
    ten_label='True',
    survey_id=21
  )

  survey_21_q3 = Questions(
    weight=1,
    text='I am comfortable discussing my hobbies with other people.',
    one_label='Never',
    ten_label='Always',
    survey_id=21
  )

 # travel
  survey_22_q1 = Questions(
    weight=1,
    text='When I take a trip with others, I am _____ the one that plans all the activities and accommodations.',
    one_label='Never',
    ten_label='Always',
    survey_id=22
  )

  survey_22_q2 = Questions(
    weight=1,
    text='I already have my next travel destination lined up in my calendar.',
    one_label='False',
    ten_label='True',
    survey_id=22
  )

  survey_22_q3 = Questions(
    weight=1,
    text='I get homesick when I travel.',
    one_label='Never',
    ten_label='Always',
    survey_id=22
  )

 # pets
  survey_23_q1 = Questions(
    weight=1,
    text='I have grown up around pets all my life.',
    one_label='False',
    ten_label='True',
    survey_id=23
  )

  survey_23_q2 = Questions(
    weight=1,
    text='Thinking about the responsibilities required to care for a pet stresses me out.',
    one_label='False',
    ten_label='True',
    survey_id=23
  )

  survey_23_q3 = Questions(
    weight=1,
    text='I would rather play with other people\'s pets than have one of my own.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=23
  )

 # fear
  survey_24_q1 = Questions(
    weight=1,
    text='My reaction during situations involving stress or fear lean more towards:',
    one_label='Flight',
    ten_label='Fight',
    survey_id=24
  )

  survey_24_q2 = Questions(
    weight=1,
    text='When I am met with a phobia of mine, I have trouble even thinking straight.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=24
  )

  survey_24_q3 = Questions(
    weight=1,
    text='I believe that my fears are completely rational.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=24
  )

 # habits
  survey_25_q1 = Questions(
    weight=1,
    text='When someone points out a habit of mine as bad, my first reaction is to defend my actions.',
    one_label='False',
    ten_label='True',
    survey_id=25
  )

  survey_25_q2 = Questions(
    weight=1,
    text='I like to go about my day in certain ways.',
    one_label='False',
    ten_label='True',
    survey_id=25
  )

  survey_25_q3 = Questions(
    weight=1,
    text='I would be very uncomfortable if someone asked me to change my lifestyle choices for their sake.',
    one_label='Disagree',
    ten_label='Agree',
    survey_id=25
  )

  db.session.add(survey_01_q1)
  db.session.add(survey_01_q2)
  db.session.add(survey_01_q3)

  db.session.add(survey_02_q1)
  db.session.add(survey_02_q2)
  db.session.add(survey_02_q3)

  db.session.add(survey_03_q1)
  db.session.add(survey_03_q2)
  db.session.add(survey_03_q3)

  db.session.add(survey_04_q1)
  db.session.add(survey_04_q2)
  db.session.add(survey_04_q3)

  db.session.add(survey_05_q1)
  db.session.add(survey_05_q2)
  db.session.add(survey_05_q3)

  db.session.add(survey_06_q1)
  db.session.add(survey_06_q2)
  db.session.add(survey_06_q3)

  db.session.add(survey_07_q1)
  db.session.add(survey_07_q2)
  db.session.add(survey_07_q3)

  db.session.add(survey_08_q1)
  db.session.add(survey_08_q2)
  db.session.add(survey_08_q3)

  db.session.add(survey_09_q1)
  db.session.add(survey_09_q2)
  db.session.add(survey_09_q3)

  db.session.add(survey_10_q1)
  db.session.add(survey_10_q2)
  db.session.add(survey_10_q3)

  db.session.add(survey_11_q1)
  db.session.add(survey_11_q2)
  db.session.add(survey_11_q3)

  db.session.add(survey_12_q1)
  db.session.add(survey_12_q2)
  db.session.add(survey_12_q3)

  db.session.add(survey_13_q1)
  db.session.add(survey_13_q2)
  db.session.add(survey_13_q3)

  db.session.add(survey_14_q1)
  db.session.add(survey_14_q2)
  db.session.add(survey_14_q3)

  db.session.add(survey_15_q1)
  db.session.add(survey_15_q2)
  db.session.add(survey_15_q3)

  db.session.add(survey_16_q1)
  db.session.add(survey_16_q2)
  db.session.add(survey_16_q3)

  db.session.add(survey_17_q1)
  db.session.add(survey_17_q2)
  db.session.add(survey_17_q3)

  db.session.add(survey_18_q1)
  db.session.add(survey_18_q2)
  db.session.add(survey_18_q3)

  db.session.add(survey_19_q1)
  db.session.add(survey_19_q2)
  db.session.add(survey_19_q3)

  db.session.add(survey_20_q1)
  db.session.add(survey_20_q2)
  db.session.add(survey_20_q3)

  db.session.add(survey_21_q1)
  db.session.add(survey_21_q2)
  db.session.add(survey_21_q3)

  db.session.add(survey_22_q1)
  db.session.add(survey_22_q2)
  db.session.add(survey_22_q3)

  db.session.add(survey_23_q1)
  db.session.add(survey_23_q2)
  db.session.add(survey_23_q3)

  db.session.add(survey_24_q1)
  db.session.add(survey_24_q2)
  db.session.add(survey_24_q3)

  db.session.add(survey_25_q1)
  db.session.add(survey_25_q2)
  db.session.add(survey_25_q3)

  db.session.commit()

def undo_questions():
  db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
  db.session.commit()
