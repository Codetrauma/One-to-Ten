from flask import Blueprint
from app.models import db, Matches


match_routes = Blueprint('matches', __name__)

@match_routes.route('/')
def all_matches():
    all_matches = Matches.query.all()
    return {'matches': [match.to_dict() for match in all_matches]}

@match_routes.route('<int:user_id_1>/<int:user_id_2>/')
def two_matches(user_id_1, user_id_2):
    matches = Matches.query.filter(Matches.user_1_id == user_id_1, Matches.user_2_id == user_id_2).all()
    return {'user_matches': [match.to_dict() for match in matches]}

@match_routes.route('/<int:user_id_1>/<int:user_id_2>/', methods=['DELETE'])
def delete_match(user_id_1, user_id_2):
    match1 = Matches.query.filter(Matches.user_1_id == user_id_1, Matches.user_2_id == user_id_2).all()
    match2 = Matches.query.filter(Matches.user_2_id == user_id_1, Matches.user_1_id == user_id_2).all()

    db.session.delete(match1[0])
    db.session.delete(match2[0])
    db.session.commit()

    return {'message': "Match deleted successfully"}
