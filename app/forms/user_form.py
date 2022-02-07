from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if email already exists in the database

    email = field.data
    user = User.query.filter(User.email == email).first()

    # If there is a current session user, only raise a user exists error if they are
    # trying to change their user email.
    if current_user.is_authenticated:
        if current_user.to_dict(current_user)['email'] == email:
            return

    if user:
            raise ValidationError('Email address is already in use.')



# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class UserForm(FlaskForm):
    first_name = StringField('First Name', validators=[DataRequired()])
    last_name = StringField('Last Name', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    gender = SelectField('Gender', choices=[('Male', 'Male'), ('Female', 'Female'), ('Non-binary', 'Non-binary')])
    dob = DateField('Date of Birth', format='%Y-%m-%d', validators=[DataRequired()])
    biography = TextAreaField('Biography')
    facebook = StringField('Facebook')
    instagram = StringField('Instagram')
    twitter = StringField('Twitter')
    snapchat = StringField('Snapchat')
    tiktok = StringField('Tiktok')
    twitter = StringField('Twitter')
    github = StringField('Github')
