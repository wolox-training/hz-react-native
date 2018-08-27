import { StyleSheet } from 'react-native';

import { black } from '../../../constants/colors';

export default StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: black
  },
  boxInner: {
    flex: 1,
    margin: 2,
    backgroundColor: black
  }
});
