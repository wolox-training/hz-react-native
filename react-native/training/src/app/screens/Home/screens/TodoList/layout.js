import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import CustomTextInput from '../../../../components/CustomTextInput';

import styles from './styles';
import Item from './components/Item';
import Footer from './components/Footer';

function Layout({ addItem, selectItem, deleteItem, items, deleteItemSelected }) {
  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Enter an item!" onSubmitEditing={addItem} style={styles.inputElement} />
      <ScrollView style={styles.containerItems}>
        {items.map(item => (
          <Item key={item.id} item={item} selectItem={selectItem} deleteItem={deleteItem} />
        ))}
      </ScrollView>
      <Footer deleteItemSelected={deleteItemSelected} />
    </View>
  );
}

Layout.propTypes = {
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

export default Layout;
