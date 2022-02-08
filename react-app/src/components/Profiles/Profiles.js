import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import UserProfile from './UserProfile/UserProfile';
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
    return null;
  }

  return (
    <>{
      console.log(sessionUser.id, userId, sessionUser === userId)
    }
      {sessionUser.id === parseInt(userId, 10) ? <UserProfile sessionUser={sessionUser} /> : (
        <ul>
          <li>
            <strong>User Id</strong> {user.id}
          </li>
          <li>
            <strong>Name</strong> {user.first_name}
          </li>
          <li>
            <strong>Biography</strong> {user.biography}
          </li>
        </ul>
      )}
    </>
  )
}

export default User;
