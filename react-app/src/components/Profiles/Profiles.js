import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import UserProfile from './UserProfile/UserProfile';
import MatchProfile from './MatchProfile/MatchProfile';
import { getOneUser } from '../../store/users';

import '../../utils.css';

function User() {
  // const [user, setUser] = useState({});
  const { userId } = useParams();

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.byId[parseInt(userId, 10)]);
  console.log(`!!!!!!~#@!$@!$`, user)

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  useEffect(() => {
    dispatch(getOneUser(userId));
  }, [dispatch])

  if (!user) {
    return (
      <>
        <div className="error__404">
          <h3>User Does Not Exist</h3>
          <p className="p-1">
            <Link className="underline-slide" to={`/users/${sessionUser.id}`}>
              Click here to return to your profile page.
            </Link>
          </p>
        </div>
      </>
    );
  }

  return (
    <>{
      console.log(sessionUser.id, userId, sessionUser === userId)
    }
      {sessionUser.id === parseInt(userId, 10) ?
        <UserProfile sessionUser={sessionUser} />
        :
        <MatchProfile user={user} />
      }
    </>
  )
}

export default User;
