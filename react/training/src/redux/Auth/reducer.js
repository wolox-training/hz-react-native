import { createReducer, onSuccess, onLoading, onFailure } from 'redux-recompose';
import Immutable from 'seamless-immutable';

const defaultState = {
  signIn: undefined,
  signInLoading: false,
  signInError: false
};

const reducerDescription = {
  SIGN_IN_SUCCESS: onSuccess(),
  SIGN_IN_LOADING: onLoading(),
  SIGN_IN_FAILURE: onFailure()
};

export default createReducer(Immutable(defaultState), reducerDescription);
