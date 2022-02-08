import { Link } from 'react-router-dom';
import '../Profiles.css';

const matches = [
    'Name 2',
    'Name 2',
    'Name 3',
    'Name 4',
    'Name 5',
    'Name 6',
    'Name 7',
    'Name 8',
    'Name 9',
    'Name 10',
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
                        These are the users whose outlooks in life are the most similar to you. The more questions you answer, the more accurate your match results.
                    </p>
                </div>
                <div className="flex__container--child flex__container--padded">
                    <ul>
                        {matches.map(match => {
                            return (<li key={match}>Test{match}</li>)
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MatchList;
