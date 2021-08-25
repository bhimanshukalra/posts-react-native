import {StyleSheet} from 'react-native';
import {primaryBg} from '../../util/Colors';

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: primaryBg,
  },
  list: {
    paddingHorizontal: 20,
  },
  itemView: {
    marginVertical: 10,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
  },
  itemPrimaryChild: {
    flex: 8,
  },
  itemSecondaryChild: {
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  authorWrapper: {
    backgroundColor: 'rgb(167, 221, 107)',
    width: '50%',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
});
