import { StyleSheet } from 'react-native';
import { color } from '../../utility';

export default StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.SEMI_TRANSPARENT,
  },
  container: {
    width: '100%',
    backgroundColor: color.DARK_GRAY,
    padding: 5,
    height: 200,
  },
  crossIcon: {
    alignSelf: 'flex-end',
  },

  formItem: { paddingLeft: 5 },

  formLabel: { color: color.WHITE, fontSize: 18 },
  btn: { top: 20, alignSelf: 'flex-end' },
});
