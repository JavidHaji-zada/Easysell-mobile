import { APP_COLORS, CONSTANTS } from "@shared/styles";
import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default StyleSheet.create({
    container: {
        backgroundColor: APP_COLORS.textGreen
    },
    upperContainer: {
        paddingHorizontal: 36,
        paddingTop: 24,
        paddingBottom: 12,
    },
    logo: {
        width: responsiveWidth(28),
        height: responsiveHeight(28),
        resizeMode: 'contain',
    },
    headerTextBold: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: CONSTANTS.FONT_SIZE[16],
    },
    headerText: {
        color: 'white',
        fontSize: CONSTANTS.FONT_SIZE[16],
    },
    innerContainer: {
        flex: 1,
        padding: 36,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        backgroundColor: 'white'
    },
    inputContainer: {
        marginTop: 18,
    },
    forgotPassButton: {
        width: '100%',
        marginTop: 4,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    forgotPassText: {
        color: APP_COLORS.ligthBlue,
    },
    loginButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: APP_COLORS.lightGreen,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 12
    },
    loginText: {
        fontSize: CONSTANTS.FONT_SIZE[16],
        color: APP_COLORS.gray
    },
    loginIcon: {
        marginLeft: 4
    },
    newAccountButtonContainer: {
        width: '100%',
        marginTop: 4,
        display: 'flex',
        justifyContent: 'center'
    },
    newAccountButton: {
        margin: 12,
        padding: 12,
        backgroundColor: APP_COLORS.ligthBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    newAccountText: {
        color: 'white',
        fontSize: CONSTANTS.FONT_SIZE[15],
    },
    manageText: {
        fontSize: CONSTANTS.FONT_SIZE[16],
        maxWidth: '50%',
    }
})