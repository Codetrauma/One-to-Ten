import { Link } from 'react-router-dom';
import '../Profiles.css';

function SessionProfile({ sessionUser }) {
    return (
        <>
            <div id="dark__background"></div>
            <div id="flex__container--split">
                <div className="flex__container--child flex__container--padded">
                    <h1 className="profile__title">
                        Hello Amy.
                    </h1>
                    <div className="profile__navigation">
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
                        <p className="profile__navigation--link">
                            <Link className="underline-slide link__light" to={`/users/${sessionUser.id}/responses`}>
                                My Responses
                            </Link>
                        </p>
                        <p className="profile__navigation--link">
                            <Link className="underline-slide link__light" to={`/users/${sessionUser.id}/profile`}>
                                Edit Profile
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="flex__container--child flex__container--padded">
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
                </div>
            </div>
        </>
    )
}

export default SessionProfile;
