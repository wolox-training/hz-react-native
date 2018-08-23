import { createReducer, onReadValue, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './action';

const initialState = completeState({ userData: null, userDataUpdated: null }, ['userDataUpdated']);

const reducerDescription = {
  primaryActions: [actions.FETCH_USER_DATA, actions.UPDATE_USER_DATA],
  override: {
    [actions.USER_DATA_UPDATED]: onReadValue()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
