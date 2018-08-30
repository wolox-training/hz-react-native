import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import CustomCheckbox from '../../../../../../components/CustomCheckbox';
import CustomButton from '../../../../../../components/CustomButton';

import styles from './styles';

class Item extends Component {
  handleToggle = () => {
    const { item, selectItem } = this.props;
    selectItem(item.id);
  };

  handleDeleteItem = () => {
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <View style={[styles.container, item.selected && styles.containerSelected]}>
        <CustomText style={styles.textItem}> {item.value} </CustomText>
        <View style={styles.containerOptions}>
          <CustomCheckbox onToggle={this.handleToggle} isChecked={item.selected} />
          <CustomButton
            onPress={this.handleDeleteItem}
            title="X"
            transparent
            style={styles.button}
            textStyle={styles.textButton}
            activeOpacity={0.6}
          />
        </View>
      </View>
    );
  }
}

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  selectItem: PropTypes.func.isRequired
};

export default Item;
