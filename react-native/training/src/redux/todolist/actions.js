import { createTypes } from 'redux-recompose';

export const actions = createTypes(
  ['ADD_ITEM', 'TOGGLE_ITEM_COMPLETED', 'DELETE_ITEM', 'DELETE_ITEMS_SELECTED'],
  '@@TODOLIST'
);

const target = 'items';

export default {
  addItem: item => async dispatch => {
    dispatch({ type: actions.ADD_ITEM, payload: item, target });
  },
  toggleItemCompleted: id => async dispatch => {
    dispatch({ type: actions.TOGGLE_ITEM_COMPLETED, payload: id });
  },
  deleteItem: id => async dispatch => {
    dispatch({ type: actions.DELETE_ITEM, payload: id, target });
  },
  deleteItemsSelected: () => async dispatch => {
    dispatch({ type: actions.DELETE_ITEMS_SELECTED, target });
  }
};
