import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import CustomTextInput from '../../../../components/CustomTextInput';
import { strings } from '../../../../i18n';

import styles from './styles';
import Item from './components/Item';
import Footer from './components/Footer';

class TodoList extends Component {
  keyExtractor = item => item.id;

  render() {
    const { items, addItem, selectItem, deleteItem, deleteItemSelected } = this.props;
    return (
      <View style={styles.container}>
        <CustomTextInput
          placeholder={strings.TODOLIST_TEXT_INPUT()}
          onSubmitEditing={addItem}
          style={styles.inputElement}
        />
        <FlatList
          style={styles.containerItems}
          data={items}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <Item key={item.id} item={item} selectItem={selectItem} deleteItem={deleteItem} />
          )}
        />
        <Footer deleteItemSelected={deleteItemSelected} />
      </View>
    );
  }
}

TodoList.propTypes = {
  addItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  deleteItemSelected: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string
    })
  ),
  selectItem: PropTypes.func.isRequired
};

export default TodoList;
