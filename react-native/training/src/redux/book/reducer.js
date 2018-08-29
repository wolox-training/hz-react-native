import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = completeState({ books: [] });

const reducerDescription = {
  primaryActions: [actions.FETCH_BOOK]
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
