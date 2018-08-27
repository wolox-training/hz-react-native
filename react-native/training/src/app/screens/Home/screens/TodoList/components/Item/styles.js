import { StyleSheet } from 'react-native';

import { gray, newYorkPink } from '../../../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: gray
  },
  containerSelected: {
    backgroundColor: gray
  },
  textItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto'
  },
  containerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    marginLeft: 5
  },
  textButton: {
    color: newYorkPink,
    fontWeight: '600'
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 3,
    marginLeft: 4
  }
});
