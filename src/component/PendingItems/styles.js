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
    left: { flex: 0.8 },
    right: {
        flex: 0.2,
        alignItems: 'center',
    },
});
