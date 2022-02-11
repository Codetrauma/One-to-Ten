import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import UserProfile from './UserProfile/UserProfile';
import MatchProfile from './MatchProfile/MatchProfile';
import { getOneUser } from '../../store/users';

import '../../utils.css';

function User() {
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.byId[parseInt(userId, 10)]);

  useEffect(() => {
    dispatch(getOneUser(userId));
  }, [dispatch]);


  if (!user) {
    return (
      <>
        <div className="error__404 link__light">
          <h3>User Does Not Exist</h3>
          <p className="p-1">
            <Link className="underline-slide" to={`/`}>
              Click here to return to your dashboard.
            </Link>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {sessionUser.id === parseInt(userId, 10) ?
        <UserProfile sessionUser={sessionUser} />
        :
        <MatchProfile user={user} />
      }
    </>
  )
}

export default User;
