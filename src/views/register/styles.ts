import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { APP_COLORS, CONSTANTS } from "../../shared/styles";

export default StyleSheet.create({
    container: {
        backgroundColor: APP_COLORS.textGreen
    },
    upperContainer: {
        paddingHorizontal: 36,
        paddingTop: 24,
        paddingBottom: 12,
    },
    innerContainer: {
        padding: 36,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        backgroundColor: 'white'
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
    logo: {
        width: responsiveWidth(28),
        height: responsiveHeight(28),
        resizeMode: 'contain',
    },
    inputContainer: {
        marginTop: 18,
    },
    inputs: {
        marginTop: 6,
        maxWidth: 290,
    },
    registerContent: {
        paddingTop: 20,
    },
    registerContentMobile: {
        alignItems: 'center',
        width: '100%'
    },
    textStyle: {
        marginTop: 12
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
    registerButton: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: APP_COLORS.lightGreen,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 12
    },
    registerText: {
        fontSize: CONSTANTS.FONT_SIZE[12],
        color: APP_COLORS.gray
    },
    registerIcon: {
        marginLeft: 4
    },
    loginButtonContainer: {
        width: '100%',
        marginTop: 4,
        display: 'flex',
        justifyContent: 'center'
    },
    loginButton: {
        margin: 12,
        padding: 12,
        backgroundColor: APP_COLORS.ligthBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    newAccountText: {
        color: 'white'
    },
    multiChannelText: {
        maxWidth: 330,
        color: APP_COLORS.textGreen,
        fontSize: 36
    },
    manageText: {
        fontSize: 18,
        maxWidth: '50%',
    }
});
