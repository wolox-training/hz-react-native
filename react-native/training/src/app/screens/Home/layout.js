import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import CustomButton from '../../components/CustomButton';

import styles from './styles';

export default function Home({ onLogout }) {
  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <CustomButton onPress={onLogout} green title="Logout!" style={styles.mainButton} />
    </View>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired
};
