import {StyleSheet} from 'react-native';
import {primaryBg} from '../../util/Colors';

export const styles = StyleSheet.create({
  parent: {
    backgroundColor: primaryBg,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
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
  },
  itemText: {
    fontSize: 16,
  },
  heading: {
    fontWeight: '600',
  },
  listParent: {
    flex: 1,
  },
});
