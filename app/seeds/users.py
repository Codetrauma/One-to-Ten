from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email='demo@aa.io', first_name='Test', last_name='test', gender='male', dob='2022-02-02', biography='testing', password='password', active=True)
    marnie = User(
        email='marnie@aa.io', first_name='Test1', last_name='test1', gender='male', dob='2022-02-02', biography='testing', password='password', active=True)
    bobbie = User(
        email='bobbie@aa.io', first_name='Test2', last_name='test2', gender='male', dob='2022-02-02', biography='testing', password='password', active=False)

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
