import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../../../../../../components/CustomText';
import CustomCheckbox from '../../../../../../components/CustomCheckbox';
import CustomButton from '../../../../../../components/CustomButton';

import styles from './styles';

function Item({ item, selectItem, deleteItem }) {
  const handleToggle = () => {
    selectItem(item.id);
  };

  const hanldeDeleteItem = () => {
    deleteItem(item.id);
  };

  return (
    <View style={[styles.container, item.selected && styles.containerSelected]}>
      <CustomText style={styles.textItem}> {item.value} </CustomText>
      <View style={styles.containerOptions}>
        <CustomCheckbox onToggle={handleToggle} isChecked={item.selected} />
        <CustomButton
          onPress={hanldeDeleteItem}
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

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  selectItem: PropTypes.func.isRequired
};

export default Item;
