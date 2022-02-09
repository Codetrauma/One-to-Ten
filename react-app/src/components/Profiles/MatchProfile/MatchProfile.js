import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getMatches, deleteMatch } from '../../../store/matches';

import './MatchProfile.css';
import ArrowButton from '../../Forms/ArrowButton/ArrowButton';

function MatchProfile({ user, children, previewMode }) {
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const matchesObj = useSelector(state => state.matches.matches.byUserId);

    useEffect(() => {
        dispatch(getMatches(sessionUser.id))
    }, [])

    let match;
    if (matchesObj) match = matchesObj[user.id];

    const socials = {
        facebook: user.facebook,
        instagram: user.instagram,
        snapchat: user.snapchat,
        tiktok: user.tiktok,
        twitter: user.twitter,
        github: user.github
    }

    // see if there are any social records exist for the user
    const socialVals = Object.values(socials);
    const truthyExists = socialVals.some(val => !!val);

    function handleBlock(e) {
        e.preventDefault();
        dispatch(deleteMatch(sessionUser.id, match.user_2_id));
        dispatch(getMatches(sessionUser.id))

        history.push(`/users/${sessionUser.id}/matches`);
    }

    const socialLinks = (
        <>
            {socials.facebook &&
                (<a href={`https://facebook.com/` + user.facebook}
                    className="match__social--links underline-slide"
                    target="_blank" rel="noreferrer noopener">
                    Facebook
                </a>
                )}
            {socials.instagram &&
                (<a href={`https://instagram.com/` + user.instagram}
                    className="match__social--links underline-slide"
                    target="_blank" rel="noreferrer noopener">
                    Instagram
                </a>
                )}
            {socials.twitter &&
                (<a href={`https://twitter.com/` + user.twitter}
                    className="match__social--links underline-slide"
                    target="_blank" rel="noreferrer noopener">
                    Twitter
                </a>
                )}
            {socials.snapchat &&
                (<a href={`https://snapchat.com/add/` + user.snapchat}
                    className="match__social--links underline-slide"
                    target="_blank" rel="noreferrer noopener">
                    Snapchat
                </a>
                )}
            {socials.tiktok &&
                (<a href={`https://tiktok.com/@` + user.tiktok}
                    className="match__social--links underline-slide"
                    target="_blank" rel="noreferrer noopener">
                    TikTok
                </a>
                )}
            {socials.github &&
                (<a href={`https://github.com/` + user.github}
                    className="match__social--links underline-slide"
                    target="_blank" rel="noreferrer noopener">
                    Github
                </a>
                )}
        </>
    )

    if (!match && location.pathname !== `/users/${sessionUser.id}` || !user) {
        return (
            <>
                <div className="error__404">
                    <h3>Match Does Not Exist</h3>
                    <p className="p-1">
                        <Link className="underline-slide" to={`/users/${sessionUser.id}/matches`}>
                            Click here to return to your top matches list.
                        </Link>
                    </p>
                </div>
            </>
        )
    }
    return (
        <>
            <div id="flex__container--split">
                <div className="flex__container--child flex__container--padded">

                    <h1 className="main-color">
                        {user.first_name} {user.last_name.slice(0, 1) + '.'}
                    </h1>
                    {previewMode ?
                        <p className="p-1 accent-color-1">
                            Complete more surveys to view your compatibility.
                        </p>
                        :
                        <p className="p-1 accent-color-1">
                            Your Match Compatibility: {match && match.compatibility_score}
                        </p>
                    }
                    {previewMode && children}
                </div>
                <div className="flex__container--child flex__container--padded match__profile--info">
                    <div className="match__profile--info">
                        {user.biography && (
                            <div className="match__bio">
                                <h4>About {user.first_name}</h4>
                                <p className="p-1 accent-color-3">
                                    {user.biography}
                                </p>
                            </div>
                        )}
                        <div className="match__socials">
                            <h5>Get Connected</h5>
                            {truthyExists ? socialLinks : (
                                previewMode ?
                                    <>
                                        You have not added any social links yet.
                                    </>
                                    :

                                    <>
                                        {user.first_name} hasn't shared much about themselves, so we have no way to help you get in touch. {`:(`}
                                    </>
                            )}
                        </div>
                        {!previewMode &&
                            <>
                                <div className="match__delete">
                                    <button
                                        onClick={handleBlock}
                                        className="match__delete--button underline-slide accent-color-4"
                                    >
                                        Block {user.first_name}
                                    </button>
                                    <div className="back__link">
                                        <Link className="underline-slide" to={`/users/${sessionUser.id}/matches`}>
                                            Back to Matches
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default MatchProfile;
