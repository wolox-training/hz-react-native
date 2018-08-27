import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import todoListActions from '../../../../../redux/todolist/actions';

import Layout from './layout';

class TodoList extends Component {
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
      <Layout
        items={items}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
        selectItem={this.selectItem}
        deleteItemSelected={this.deleteItemSelected}
      />
    );
  }
}

TodoList.propTypes = {
  addItem: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string
    })
  ),
  toggleItemCompleted: PropTypes.func,
  deleteItem: PropTypes.func,
  deleteItemsSelected: PropTypes.func
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
)(TodoList);
