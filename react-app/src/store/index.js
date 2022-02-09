import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import questionResponsesReducer from './questionResponses';
import questionReducer from './questions';
import session from './session'
import surveyResponseReducer from './surveyResponses';
import surveyReducer from './surveys';
import userReducer from './users';
import matchReducer from './matches';

const rootReducer = combineReducers({
  session,
  user: userReducer,
  surveys: surveyReducer,
  questions: questionReducer,
  surveyResponses: surveyResponseReducer,
  questionResponses: questionResponsesReducer,
  matches: matchReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
