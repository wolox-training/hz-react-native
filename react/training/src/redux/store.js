import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { reducer as authReducer } from './Auth/reducer';
import { reducer as preferencesReducer } from './Preferences/reducer';

const reducers = {
  form: formReducer,
  auth: authReducer,
  preferences: preferencesReducer
};

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
  applyMiddleware(thunk)
);

export default store;
