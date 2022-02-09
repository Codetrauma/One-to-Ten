import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getMatches } from '../../../store/matches';
import { getUsers } from '../../../store/users';

import './MatchList.css';

function MatchList() {
    const location = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const matchesObj = useSelector(state => state.matches.byUserId)
    const usersObj = useSelector(state => state.user.byId);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getMatches(sessionUser.id));
    }, [])

    let users;
    if (usersObj) users = Object.values(usersObj);

    let matches, matchesTable;
    if (matchesObj) {
        matches = Object.values(matchesObj);

        matchesTable = (
            <table id="match__table">
                <tbody>
                    {matches.map(match => (
                        <tr>
                            <td className="match__name">
                                <Link to={`/users/${match.user_2_id}`} className="underline-slide">
                                    {usersObj[match.user_2_id] && usersObj[match.user_2_id].first_name + ' ' + usersObj[match.user_2_id].last_name.slice(0, 1) + '.'}
                                </Link>
                            </td>
                            <td className="match__percentage">
                                {match.compatibility_score}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )

    }

    const noMatches = (
        (<p className="p-1 match__none">No matches available at the moment.</p>)
    );

    return (
        <>
            <div id="flex__container--split">
                <div className="flex__container--child flex__container--padded">
                    <h1 className="accent-color-1">
                        Top Matches
                    </h1>

                    <p className="p-1 main-color">
                        These are the users whose outlooks in life are the most similar to yours. The more questions you answer, the more accurate your match results.
                    </p>
                </div>
                <div className="flex__container--child flex__container--padded">
                    {matches?.length > 0 ? matchesTable : noMatches}
                </div>
            </div>
        </>
    )
}

export default MatchList;
