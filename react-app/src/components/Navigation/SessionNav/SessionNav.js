import { Link } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';

function SessionNav({ sessionUser }) {
    if (sessionUser) {
        return (
            <>
                <div className="nav__bar--child nav__bar--2">
                    <div className="nav__bar--grid">
                        <div className="nav__bar--grid-left">
                            <Link
                                className="nav__link"
                                to={`/users/${sessionUser.id}/matches`} >
                                View Matches
                            </Link>
                        </div>
                        <div className="nav__bar--grid-right">
                            <Link
                                className="nav__link"
                                to={`/users/${sessionUser.id}/edit`}>
                                Edit Profile
                            </Link>
                        </div>
                        <div className="nav__bar--grid-left">
                            <Link
                                className="nav__link"
                                to={`/surveys`}>
                                Answer Questions
                            </Link>
                        </div>
                        <div className="nav__bar--grid-right">
                            <Link
                                className="nav__link"
                                to={`/`}>
                                View Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="nav__bar--child nav__bar--3">
                    <div className="nav__bar--grid">
                        <div className="nav__bar--grid-left">
                            <Link
                                to="/">
                                Participant
                            </Link>
                        </div>
                        <div className="nav__bar--grid-right">
                            <Link
                                className="nav__link"
                                to="/about">
                                About Us
                            </Link>
                        </div>
                        <div className="nav__bar--grid-left">
                            <div className="nav__bar--user-no">
                                <Link
                                    to="">
                                    &#8470; {sessionUser.id}
                                </Link>
                            </div>
                        </div>
                        <div className="nav__bar--grid-right">
                            <a
                                className="nav__link"
                                href="https://github.com/JTannerShaw/One-to-Ten"
                                target="_blank" rel="noreferrer noopener">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="nav__bar--child nav__bar--4">
                    <h2 className='nav__bar--title'>
                        <LogoutButton />
                    </h2>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="nav__bar--child nav__bar--2">
                    <p className="nav__bar--description p-2">
                        A social experiment designed to connect like-minded individuals with one another. <Link to="/about" className="nav__bar--link underline-slide">Learn More.</Link>
                    </p>
                </div>
                <div className="nav__bar--child nav__bar--3">
                    <h2 className="nav__bar--title">
                        <Link to='/sign-up' exact={true}>
                            Sign Up
                        </Link>
                    </h2>
                </div>
                <div className="nav__bar--child nav__bar--4">
                    <h2 className='nav__bar--title nav__bar--auth'>
                        <Link to='/login' exact={true}>
                            Login
                        </Link>
                    </h2>
                </div>
            </>
        )
    }
}

export default SessionNav;
