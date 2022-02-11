from flask.cli import AppGroup
from .users import seed_users, undo_users
from .questions import seed_questions, undo_questions
from .surveys import seed_surveys, undo_surveys
from .survey_responses import seed_survey_responses, undo_survey_responses
from .question_responses import seed_question_responses, undo_question_responses
from .question_stats import seed_question_stats, undo_question_stats
from .matches import seed_matches, undo_matches
from .bulk import seed_bulk, undo_bulk

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # seed_users()
    seed_surveys()
    # seed_survey_responses()
    seed_questions()
    # seed_question_responses()
    # seed_question_stats()
    # seed_matches()
    # Add other seed functions here
    seed_bulk()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_bulk()
    # undo_users()
    undo_surveys()
    # undo_survey_responses()
    undo_questions()
    # undo_question_responses()
    # undo_question_stats()
    # undo_matches()
    # Add other undo functions here

@seed_commands.command('reset')
def reset():
    # Add whatever is in the undo function
    undo_bulk()
    undo_surveys()
    undo_questions()

    # Add whatever is in your seed function
    seed_surveys()
    seed_questions()
    seed_bulk()
