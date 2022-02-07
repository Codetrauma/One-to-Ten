from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.forms import UserForm
from app.models import db, User

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

@user_routes.route('/<int:id>', methods=['GET'])
@login_required
def user(id):
    """
    Get one user. If id argument is the session user's id,
    information about the user's account details will also be shown.
    """
    user = User.query.get(id)

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

            return user.to_dict(current_user)
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {'errors': ['Unauthorized']}, 401
