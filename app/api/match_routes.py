from flask import Blueprint
from app.models import db, Matches


match_routes = Blueprint('matches', __name__)
