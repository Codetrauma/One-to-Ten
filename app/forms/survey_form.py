from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class SurveyForm(FlaskForm):
    response = IntegerField('response', validators=[DataRequired()])
    question_id = IntegerField('question_id', validators=[DataRequired()])
