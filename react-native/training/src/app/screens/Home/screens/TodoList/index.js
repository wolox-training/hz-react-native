import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import todoListActions from '../../../../../redux/todolist/actions';

import TodoList from './layout';

class TodoListContainer extends Component {
  addItem = value => {
    const { addItem } = this.props;
    addItem({ id: this.autoGenerateId(), value, selected: false });
  };

  autoGenerateId = () => {
    const { items } = this.props;
    return `auto-${items.length + 1}`;
  };

  deleteItem = id => {
    const { deleteItem } = this.props;
    deleteItem(id);
  };

  selectItem = id => {
    const { toggleItemCompleted } = this.props;
    toggleItemCompleted(id);
  };

  deleteItemSelected = () => {
    const { deleteItemsSelected } = this.props;
    deleteItemsSelected();
  };

  render() {
    const { items } = this.props;
    return (
      <TodoList
        items={items}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
        selectItem={this.selectItem}
        deleteItemSelected={this.deleteItemSelected}
      />
    );
  }
}

TodoListContainer.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string
    })
  ),
  toggleItemCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  deleteItemsSelected: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  items: store.todolist.items,
  itemsSelected: store.todolist.itemsSelected
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(todoListActions.addItem(item)),
  toggleItemCompleted: id => dispatch(todoListActions.toggleItemCompleted(id)),
  deleteItem: id => dispatch(todoListActions.deleteItem(id)),
  deleteItemsSelected: () => dispatch(todoListActions.deleteItemsSelected())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);
