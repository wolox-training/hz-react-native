import { StyleSheet } from 'react-native';

import { gray, white } from '../../../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 8
  },
  bookImage: {
    borderRadius: 30,
    height: 60,
    marginRight: 10,
    marginVertical: 10,
    width: 60
  },
  bookInfo: {
    borderBottomWidth: 1,
    borderColor: gray,
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    paddingVertical: 10
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
