import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './action';

const initialState = completeState({ signIn: null });

const reducerDescription = {
  primaryActions: [actions.SIGN_IN]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
