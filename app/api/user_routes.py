from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.api.survey_routes import survey
from app.forms import UserForm
from app.models import db, User, SurveyResponses, Matches

user_routes = Blueprint('users', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_routes.route('/')
@login_required
def users():
    """
    Get all users. If the given user id is the same as the session user's id,
    information about the user's account will also be show.
    """
    users = User.query.all()
    return {'users': [user.to_dict(current_user) for user in users]}

@user_routes.route('/<int:user_id>', methods=['GET'])
@login_required
def user(user_id):
    """
    Get one user. If id argument is the session user's id,
    information about the user's account details will also be shown.
    """
    user = User.query.get(user_id)

    return user.to_dict(current_user)

@user_routes.route('/<int:id>', methods=['PUT'])
@login_required
def user_update(id):
    """
    Update the session user's record if id of record being updated matches current user's id.
    Returns unauthorized error ids do not match.
    """
    form = UserForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if id == current_user.id:
        user = User.query.get(id)

        if form.validate_on_submit():
            user.first_name = form.data['first_name']
            user.last_name = form.data['last_name']
            user.email = form.data['email']
            user.password = form.data['password']
            user.gender = form.data['gender']
            user.dob = form.data['dob']
            user.city = form.data['city']
            user.state_abbreviation = form.data['state_abbreviation']
            user.biography = form.data['biography']
            user.facebook = form.data['facebook']
            user.instagram = form.data['instagram']
            user.twitter = form.data['twitter']
            user.snapchat = form.data['snapchat']
            user.tiktok = form.data['tiktok']
            user.github = form.data['github']

            db.session.commit()

            return {'user': user.to_dict(current_user)}
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {'errors': ['Unauthorized']}, 401

@user_routes.route('/<int:user_id>/surveys', methods=['GET'])
@login_required
def user_survey_responses(user_id):
    """
    Get all survey response records for a user.
    """
    survey_responses = SurveyResponses.query.filter(SurveyResponses.user_id == user_id).all()

    return { 'survey_responses': [survey_response.to_dict() for survey_response in survey_responses]}

@user_routes.route('/<int:user_id>/matches')
@login_required
def user_matches(user_id):
    match = Matches.query.filter(Matches.user_1_id == user_id).all()
    return {'user_matches': [match.to_dict() for match in match]}

@user_routes.route('/<int:user_id>/matches/create', methods=['POST'])
@login_required
def generate_matches(user_id):
    users = User.query.all()

    for user in users:
        if user_id != user.id:
            match1 = Matches(compatibility_score=0, user_1_id=user_id, user_2_id=user.id)
            match2 = Matches(compatibility_score=0, user_1_id=user.id, user_2_id=user_id)
            user.isActive = True
            db.session.add(match1)
            db.session.add(match2)

    db.session.commit()

    match = Matches.query.filter(Matches.user_1_id == user_id).all()
    return {'user_matches': [match.to_dict() for match in match]}
