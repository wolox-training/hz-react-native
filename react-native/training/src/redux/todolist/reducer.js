import { createReducer, onReadValue, onDelete } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  items: []
};

const reducerDescription = {
  [actions.ADD_ITEM]: onReadValue((action, state) => [...state.items, action.payload]),
  [actions.TOGGLE_ITEM_COMPLETED]: (state, action) =>
    state.merge({
      items: state.items.map(item => {
        if (item.id === action.payload) {
          return { ...item, selected: !item.selected };
        }
        return item;
      })
    }),
  [actions.DELETE_ITEM]: onDelete(),
  [actions.DELETE_ITEMS_SELECTED]: onDelete(null, null, item => !item.selected)
};

export default createReducer(Immutable(defaultState), reducerDescription);
