import React from 'react';
import { View } from 'react-native';

import CustomText from '../../../../components/CustomText';

import styles from './styles';

function Book() {
  return (
    <View style={styles.container}>
      <CustomText>Books it works!</CustomText>
    </View>
  );
}

export default Book;
