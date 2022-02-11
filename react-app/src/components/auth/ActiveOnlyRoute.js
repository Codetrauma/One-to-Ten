import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ActiveOnlyRoute = props => {
    const user = useSelector(state => state.session.user)
    // const active = user.active;

    return (
        <Route {...props}>
            {(user && user.active) ? props.children : <Redirect to='/' />}
        </Route>
    )
};


export default ActiveOnlyRoute;
