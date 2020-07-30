import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  left: { flex: 0.7 },
  right: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
