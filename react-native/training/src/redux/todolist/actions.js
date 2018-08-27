import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(
  completeTypes(['TODOLIST'], ['ADD_ITEM', 'TOGGLE_ITEM_COMPLETED', 'DELETE_ITEM', 'DELETE_ITEMS_SELECTED']),
  '@@TODOLIST'
);

export default {
  addItem: item => async dispatch => {
    dispatch({ type: actions.ADD_ITEM, payload: item });
  },
  toggleItemCompleted: id => async dispatch => {
    dispatch({ type: actions.TOGGLE_ITEM_COMPLETED, payload: id });
  },
  deleteItem: id => async dispatch => {
    dispatch({ type: actions.DELETE_ITEM, payload: id });
  },
  deleteItemsSelected: () => async dispatch => {
    dispatch({ type: actions.DELETE_ITEMS_SELECTED });
  }
};
