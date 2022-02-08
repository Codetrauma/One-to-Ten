import { Link, NavLink } from 'react-router-dom';
import '../Profiles.css';
import './UserProfile.css';

function SessionProfile({ sessionUser }) {

    let isActive = sessionUser.isActive
    if (isActive === undefined) isActive = true

    const handleDeactivate = () => {
        console.log('handle deactivate')
    }

    return (
        <>
            <div id="dark__background"></div>
            <div id="flex__container--split">
                <div className="flex__container--child flex__container--padded">
                    <h1 className="accent-color-2">
                        Hello {sessionUser.first_name}
                    </h1>
                    {!isActive &&
                        <>
                        <p className="p-1 accent-color-5">
                                Complete the Icebreaker survey to activate your profile.
                        </p>
                        </>
                        }
                    <div className="profile__navigation">
                        {isActive &&
                        <>
                        <p className="profile__navigation--link">
                            <Link className="underline-slide link__light" to={`/users/${sessionUser.id}/matches`}>
                                View Matches
                            </Link>
                        </p>
                        <p className="profile__navigation--link">
                            <Link className="underline-slide link__light" to="/surveys">
                                Answer Questions
                            </Link>
                        </p>

                        </>
                        }

                        <p className="profile__navigation--link">
                            <Link className="underline-slide link__light" to={`/users/${sessionUser.id}/profile`}>
                                Edit Profile
                            </Link>
                        </p>
                        {isActive &&
                            <p
                                className="deactivate profile__navigation--link underline-slide link__light"
                                onClick={handleDeactivate}
                            >
                                Deactivate Profile
                            </p>
                        }
                    </div>
                </div>
                <div className="flex__container--child flex__container--padded">
                    { isActive ?
                        <div className="profile__stats">
                            <div className="profile__stats--section">
                                <div className="profile__stats--num">212</div>
                                <div className="profile__stats--caption">Questions Answered</div>
                            </div>
                            <div className="profile__stats--section">
                                <div className="profile__stats--num">74</div>
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
