import { StyleSheet } from 'react-native';

import { gray } from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerItems: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: gray
  },
  inputElement: {
    padding: 14,
    height: 'auto'
  }
});
