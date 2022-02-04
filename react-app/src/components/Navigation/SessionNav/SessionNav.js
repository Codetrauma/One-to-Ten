import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';

function SessionNav({ sessionUser }) {
    if (sessionUser) {
        return (
            <>
                <div className="nav__bar--child nav__bar--2">
                    <div className="nav__bar--grid">
                        <div className="nav__bar--grid-left">
                            <NavLink
                                activeClassName='nav__bar--link-active'
                                className="nav__bar--link"
                                to={`/users/${sessionUser.id}/matches`} >
                                View Matches
                            </NavLink>
                        </div>
                        <div className="nav__bar--grid-right">
                            <NavLink
                                activeClassName='nav__bar--link-active'
                                className="nav__bar--link"
                                to={`/users/${sessionUser.id}/profile`}>
                                Edit Profile
                            </NavLink>
                        </div>
                        <div className="nav__bar--grid-left">
                            <NavLink
                                activeClassName='nav__bar--link-active'
                                className="nav__bar--link"
                                to={`/surveys`}>
                                Answer Questions
                            </NavLink>
                        </div>
                        <div className="nav__bar--grid-right">
                        </div>
                    </div>
                </div>
                <div className="nav__bar--child nav__bar--3">
                    <div className="nav__bar--grid">
                        <div className="nav__bar--grid-left">
                            <NavLink
                                to={`/users/${sessionUser.id}`}>
                                Participant
                            </NavLink>
                        </div>
                        <div className="nav__bar--grid-right">
                            <NavLink
                                activeClassName='nav__bar--link-active'
                                className="nav__bar--link"
                                to="/about">
                                About Us
                            </NavLink>
                        </div>
                        <div className="nav__bar--grid-left">
                            <div className="nav__bar--user-no">
                                <NavLink
                                    to={`/users/${sessionUser.id}`}>
                                    &#8470; {sessionUser.id}
                                </NavLink>
                            </div>
                        </div>
                        <div className="nav__bar--grid-right">
                            <a
                                activeClassName='nav__bar--link-active'
                                className="nav__bar--link"
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
                        A social experiment designed to connect like-minded individuals with one another. <Link to="/about" className="nav__bar--link">Learn More.</Link>
                    </p>
                </div>
                <div className="nav__bar--child nav__bar--3">
                    <h2 className="nav__bar--title">
                        <NavLink to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                        </NavLink>
                    </h2>
                </div>
                <div className="nav__bar--child nav__bar--4">
                    <h2 className='nav__bar--title nav__bar--auth'>
                        <NavLink to='/login' exact={true} activeClassName='active'>
                            Login
                        </NavLink>
                    </h2>
                </div>
            </>
        )
    }
}

export default SessionNav;
