import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <>
            <div className="error__404">
                <h3>Page Not Found</h3>
                <p className="p-1">
                    <Link className="underline-slide" to="/">
                        Uh-oh. Click here to return to the main page.
                    </Link>
                </p>
            </div>
        </>
    )
}

export default NoMatch;
