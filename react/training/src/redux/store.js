import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';
import { reducer as formReducer } from 'redux-form';

import authReducer from './Auth/reducer';
import preferencesReducer from './Preferences/reducer';

const reducers = {
  form: formReducer,
  auth: authReducer,
  preferences: preferencesReducer
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk, fetchMiddleware))
);

export default store;
