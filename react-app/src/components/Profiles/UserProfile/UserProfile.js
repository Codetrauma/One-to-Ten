import '../Profiles.css';

function SessionProfile({ sessionUser }) {
    return (
        <>
            <div id="flex__container--divider"></div>
            <div id="flex__container--split">
                <div className="flex__container--child profile__container">
                    <h1 className="profile__title">
                        Hello Amy.
                    </h1>
                    <div className="profile__navigation">
                        <p className="profile__navigation--link">View Matches</p>
                        <p className="profile__navigation--link">Answer Questions</p>
                        <p className="profile__navigation--link">Edit Profile</p>
                        {/* <p className="profile__navigation--link">Edit Preferences</p> */}
                    </div>
                </div>
                <div className="flex__container--child profile__container">
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
