import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getMatches, deleteAllMatches } from '../../../store/matches';
import { getSurveyResponses } from '../../../store/surveyResponses';
import { updateSessionUser } from '../../../store/session';
import Confirmation from '../../Utils/Confirmation/Confirmation';
import '../Profiles.css';
import './UserProfile.css';

function SessionProfile() {
    const dispatch = useDispatch();
    // const [isActive, setIsActive] = useState(sessionUser.active);
    const sessionUser = useSelector(state => state.session.user);
    const allMatches = useSelector(state => state.matches.allMatches);

    const isActive = sessionUser.active;

    //to get number of questions completed by user
    const allSurveys = useSelector(state => state.surveyResponses.bySurveyId);
    const surveyList = Object.keys(allSurveys)
    //subtract base survey and multiply by number of questions
    const numberOfQuestions = (surveyList.length) * 3

    useEffect(() => {
        dispatch(getMatches(sessionUser.id));
        dispatch(getSurveyResponses(sessionUser.id));
    }, []);

    async function handleDeactivate() {
        await dispatch(deleteAllMatches(sessionUser.id));
        await dispatch(updateSessionUser(sessionUser, sessionUser.id));
    };

    return (
        <>
            <div id="dark__background"></div>
            <div id="flex__container--split">
                <div className="flex__container--child flex__container--padded">
                    <h1 className="accent-color-2">
                        Hello {sessionUser.first_name.slice(0, 1).toUpperCase() + sessionUser.first_name.slice(1).toLowerCase()}
                    </h1>
                    {!isActive &&
                        <>
                            <p className="p-1 accent-color-2">
                                Complete the Icebreaker survey to activate your profile.
                            </p>
                        </>
                    }
                    <div className="profile__navigation">
                        {isActive &&
                            <>
                                <p className="profile__navigation--link">
                                    <Link className="underline-slide" to={`/users/${sessionUser.id}/matches`}>
                                        View Matches
                                    </Link>
                                </p>
                                <p className="profile__navigation--link">
                                    <Link className="underline-slide" to="/surveys">
                                        Answer Questions
                                    </Link>
                                </p>

                            </>
                        }

                        <p className="profile__navigation--link">
                            <Link className="underline-slide" to={`/users/${sessionUser.id}/edit`}>
                                Edit Profile
                            </Link>
                        </p>
                        {isActive &&
                            <Confirmation
                                warningText={`Are you sure? This action is irreversible and will delete all your match data.`}
                                confirmAction={handleDeactivate}
                                confirmText={`Confirm`}
                                hideText={`Nevermind`}
                            >
                                <p
                                    className="deactivate"
                                >
                                    Deactivate Profile
                                </p>
                            </Confirmation>
                        }
                    </div>
                </div>
                <div className="flex__container--child flex__container--padded">
                    {isActive ?
                        <div className="profile__stats">
                            <div className="profile__stats--section">
                                <div className="profile__stats--num">{numberOfQuestions < 0 ? 0 : numberOfQuestions}</div>
                                <div className="profile__stats--caption">Questions Answered</div>
                            </div>
                            <div className="profile__stats--section">
                                <div className="profile__stats--num">{allMatches?.length}</div>
                                <div className="profile__stats--caption">Matches Found</div>
                            </div>
                        </div>
                        :
                        <NavLink to="/first-survey">
                            <div className='icebreaker-container'>
                                <div className='icebreaker-circle'>
                                    <div className='expanding-circle'>
                                    </div>
                                </div>
                                <h2 className='icebreaker-label'>
                                    Icebreaker
                                </h2>
                            </div>
                        </NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default SessionProfile;
