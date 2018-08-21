import { createReducer, onSuccess, onFailure, onReadValue } from 'redux-recompose';
import Immutable from 'seamless-immutable';

const defaultState = {
  userData: null,
  userDataError: false,
  userDataUpdated: null
};

const reducerDescription = {
  USER_DATA_FAILURE: onFailure(),
  USER_DATA_UPDATE: onReadValue(), // (state, action) => ({ ...state, [state.target]: action.payload }),
  USER_DATA_SUCCESS: onSuccess()
};

export default createReducer(Immutable(defaultState), reducerDescription);
