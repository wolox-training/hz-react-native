import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function CustomCheckbox({ onToggle, isChecked }) {
  return (
    <TouchableOpacity style={styles.box} onPress={onToggle}>
      {isChecked && <View style={styles.boxInner} />}
    </TouchableOpacity>
  );
}

CustomCheckbox.propTypes = {
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired
};

export default CustomCheckbox;
