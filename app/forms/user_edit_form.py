from flask_wtf import FlaskForm
from flask_login import current_user
from wtforms import StringField, TextAreaField

class UserEditForm(FlaskForm):
    biography = TextAreaField('Biography')
    facebook = StringField('Facebook')
    instagram = StringField('Instagram')
    twitter = StringField('Twitter')
    snapchat = StringField('Snapchat')
    tiktok = StringField('Tiktok')
    github = StringField('Github')
