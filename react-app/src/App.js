import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ActiveOnlyRoute from './components/auth/ActiveOnlyRoute';
import User from './components/Profiles/Profiles';
import Survey from './components/Surveys/Survey/Survey'
import FirstSurvey from './components/FirstSurvey/FirstSurvey';
import About from './components/Navigation/About/About';
import { authenticate } from './store/session';

import Navigation from './components/Navigation/Navigation';
import SurveyList from './components/SurveyList/SurveyList';
import Dots from './components/Dots/Dots';
import Splash from './components/Splash/Splash';
import NoMatch from './components/404/404';

import './App.css';
import MatchList from './components/MatchList/MatchList';
import EditProfile from './components/Profiles/EditProfile/EditProfile';

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
      <Navigation />
      <div id="main__content">
        <Switch>
          <Route path='/' exact={true} >
            <Splash />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/signup' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/about' exact={true} >
            <About />
          </Route>
          <ProtectedRoute path='/first-survey' exact={true} >
            <FirstSurvey />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId/edit' exact={true} >
            <EditProfile />
          </ProtectedRoute>
          <ActiveOnlyRoute path='/users/:userId/matches' exact={true} >
            <MatchList />
          </ActiveOnlyRoute>
          <ActiveOnlyRoute path='/surveys/:surveyId' exact={true} >
            <Survey />
          </ActiveOnlyRoute>
          <ActiveOnlyRoute path='/surveys' exact={true} >
            <SurveyList />
          </ActiveOnlyRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Dots />
    </BrowserRouter>
  );
}

export default App;
