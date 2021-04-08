import { StyleSheet } from 'react-native'
import APP_COLORS from '../../styles/colors'
export default StyleSheet.create({
    input: {
        marginTop: 8,
        borderColor: APP_COLORS.lightGray,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        paddingTop: 6,
        paddingBottom: 6,
        borderStyle: 'solid',
        minWidth: 290,
        maxWidth: 480
    },
    errorText: {
        fontWeight: 'bold',
        color: APP_COLORS.errorRed,
        fontSize: 10,
        marginTop: 0,
        marginLeft: 4
    }
});
