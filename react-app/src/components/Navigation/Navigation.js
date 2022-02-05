
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navigation.css';
import SessionNav from './SessionNav/SessionNav';

const Navigation = () => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div id="nav__bar--container">
      <div className="nav__bar--child nav__bar--1">
        <h2 className="nav__bar--title">
          <NavLink to='/' exact={true} activeClassName='active'>
            One to Ten
          </NavLink>
        </h2>
      </div>
      <SessionNav sessionUser={sessionUser} />
    </div>
  );
}

export default Navigation;
