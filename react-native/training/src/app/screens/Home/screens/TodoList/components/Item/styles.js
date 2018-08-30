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
    flex: 1
  },
  containerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0,
    marginLeft: 5
  },
  textButton: {
    color: newYorkPink,
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 5
  },
  button: {
    paddingVertical: 0,
    paddingHorizontal: 3,
    marginLeft: 4
  }
});
