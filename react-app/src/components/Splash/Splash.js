import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ArrowButton from '../Forms/ArrowButton/ArrowButton';
import './Splash.css';

function Splash() {
    const user = useSelector(state => state.session.user);

    if (user) {
        return <Redirect to={`/users/${user.id}`} />;
    }

    return (
        <>
            <div id="dark__background"></div>
            <div id="flex__container--split">
                <div className="flex__container--child">
                    <div id="splash__circle">
                        <div id="splash__title">
                            Find Your Perfect Match
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex__container--child profile__container">
                <Link className="splash__link" to="/sign-up">
                    <ArrowButton>
                        Get Started
                    </ArrowButton>
                </Link>
                <Link className="splash__link" to="/about">
                    <ArrowButton>
                        Learn More
                    </ArrowButton>
                </Link>
            </div>
        </>
    )
}

export default Splash;
