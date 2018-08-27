import { createReducer, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  items: []
};

const reducerDescription = {
  primaryActions: [actions.TODOLIST],
  override: {
    [actions.ADD_ITEM]: (state, action) => state.merge({ items: [...state.items, action.payload] }),
    [actions.TOGGLE_ITEM_COMPLETED]: (state, action) =>
      state.merge({
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return { ...item, selected: !item.selected };
          }
          return item;
        })
      }),
    [actions.DELETE_ITEM]: (state, action) =>
      state.merge({ items: state.items.filter(item => item.id !== action.payload) }),
    [actions.DELETE_ITEMS_SELECTED]: state =>
      state.merge({ items: state.items.filter(item => !item.selected) })
  }
};

export default createReducer(Immutable(defaultState), completeReducer(reducerDescription));
