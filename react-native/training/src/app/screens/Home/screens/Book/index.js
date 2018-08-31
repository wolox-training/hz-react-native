import React from 'react';
import { View } from 'react-native';

import CustomText from '../../../../components/CustomText';
import { strings } from '../../../../i18n';

import styles from './styles';

function Book() {
  return (
    <View style={styles.container}>
      <CustomText>{strings.DEFAULT_TEXT()}</CustomText>
    </View>
  );
}

export default Book;
