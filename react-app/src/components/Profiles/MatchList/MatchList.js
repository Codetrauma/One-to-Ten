import { Link } from 'react-router-dom';

import './MatchList.css';

const matches = [
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
    'Name N.',
]

function MatchList() {
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
                    <table id="match__table">
                        <tbody>
                            {matches.map(match => {
                                return (
                                    <tr>
                                        <td className="match__name">
                                            <Link to="/users/2" className="underline-slide">
                                                {match}
                                            </Link>
                                        </td>
                                        <td className="match__percentage">
                                            99.0
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MatchList;
