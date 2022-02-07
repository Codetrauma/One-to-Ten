import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/Profiles/Profiles';
import { authenticate } from './store/session';

import Navigation from './components/Navigation/Navigation';
import SurveyList from './components/SurveyList/SurveyList';
import Dots from './components/Dots/Dots';
import Splash from './components/Splash/Splash';
import StyleGuide from './components/StyleGuide/StyleGuide';

import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <StyleGuide /> */}
      <Navigation />
      <div id="main__content">
        <Switch>
          <Route path='/' exact={true} >
            <Splash />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path='/surveys' exact={true} >
            <SurveyList />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          {/* <ProtectedRoute path='/' exact={true} >
            <h1>Redirect to user profile?</h1>
          </ProtectedRoute> */}
        </Switch>
      </div>
      <Dots />
    </BrowserRouter>
  );
}

export default App;
