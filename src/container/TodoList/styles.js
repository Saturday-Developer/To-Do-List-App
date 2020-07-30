import { StyleSheet, Dimensions } from 'react-native';
import { color } from '../../utility';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  centerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { color: color.BLACK, alignSelf: 'center' },
  pendingItem: { height: height / 3 },
  flatListItem: { padding: 10, paddingBottom: 30 },
  completedItems: { height: height / 3, top: 15 },
});
