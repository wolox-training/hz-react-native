import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  form: formReducer
};

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

export default store;
