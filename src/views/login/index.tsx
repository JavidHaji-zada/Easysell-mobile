import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HeaderText from '@components/text/header-text';
import strings from '@shared/translations';
import styles from './styles';
import Input from '@shared/components/input';
import Button from '@shared/components/button';
import SimpleText from '@shared/components/text/simple-text';
import AuthService from '@shared/services/auth-service';
import Error_CODES from '@shared/libs/error-codes';
import { APP_COLORS, APP_STYLES } from '@shared/styles';

function Login(props): JSX.Element {
    const { navigation } = props;
    // input values
    const [email, setEmail] = useState("cavid.hacizade.99@gmail.com");
    const [pass, setPass] = useState("easysellPass1");
    const [emailError, setEmaiError] = useState(false);
    const [passError, setPassError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState('')

    function onForgotPassPress(): void {
        // TODO implement
    }

    function onLoginPress(): void {
        setLoading(true)
        AuthService.signIn(email, pass)
            .then(user => {
                // setLoading(false)
                //TODO go to main page
                // navigation.replace('Home')
            })
            .catch(err => {
                setLoading(false)
                switch (err.code) {
                    case Error_CODES.FIREBASE_ERROR_CODES.LOGIN_ERRORS.INCORRECT_PASSWORD: {
                        setLoginError(strings.login.error['incorrect-password'])
                        break
                    }
                    case Error_CODES.FIREBASE_ERROR_CODES.LOGIN_ERRORS.INVALID_EMAIL: {
                        setLoginError(strings.errors['invalid-email'])
                        break
                    }
                    case Error_CODES.FIREBASE_ERROR_CODES.GENERAL_ERRORS.TOO_MANY_REQUEST: {
                        setLoginError(strings.login.error['too-many-requests'])
                        break
                    }
                    case Error_CODES.FIREBASE_ERROR_CODES.LOGIN_ERRORS.USER_NOT_FOUND: {
                        setLoginError(strings.login.error['user-not-found'])
                        break
                    }
                    case Error_CODES.FIREBASE_ERROR_CODES.GENERAL_ERRORS.INTERNAL_ERROR: {
                        setLoginError(strings.errors['internal-error'])
                        break
                    }
                    default: {
                        setLoginError(err.message)
                    }
                }
            })
    }

    function onNewAccountPressed(): void {
        navigation.navigate('Register')
    }

    function renderInputs(): JSX.Element {
        return (
            <View>
                <Input
                    value={email}
                    placeholder={strings.common["e-mail"]}
                    showLabel
                    label={strings.common["e-mail"]}
                    onChangeText={(email) => {
                        setEmaiError(false)
                        setEmail(email)
                        setLoginError('')
                    }}
                    additionalStyles={styles.inputContainer}
                />
                <Input
                    value={pass}
                    placeholder={strings.common.password}
                    showLabel
                    secure
                    label={strings.common.password}
                    onChangeText={(pass) => {
                        setPassError(false)
                        setPass(pass)
                        setLoginError('')
                    }}
                    additionalStyles={styles.inputContainer}
                />
                <View style={styles.forgotPassButton}>
                    <Button onPress={onForgotPassPress}>
                        <SimpleText additionalStyle={styles.forgotPassText} text={strings.login['forgot-password']} />
                    </Button>
                </View>
                <Button
                    onPress={onLoginPress}
                    buttonStyle={styles.loginButton}
                    loading={loading}
                >
                    <SimpleText additionalStyle={styles.loginText} text={strings.login.login} />
                    <AntDesign name='arrowright' style={styles.loginIcon} size={16} color={APP_COLORS.gray} />
                </Button>
                {
                    loginError.length > 0 && (
                        <SimpleText text={loginError} additionalStyle={APP_STYLES.errorText} />
                    )
                }
                <View style={styles.newAccountButtonContainer}>
                    <Button
                        onPress={onNewAccountPressed}
                        buttonStyle={styles.newAccountButton}
                    >
                        <SimpleText additionalStyle={styles.newAccountText} text={strings.login['create-new-account']} />
                    </Button>
                </View>
            </View>
        );
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <Image style={styles.logo} source={require('@assets/images/logo_wordless.png')} />
                    <HeaderText
                        text={strings.login.welcome}
                        additionalStyle={styles.headerTextBold} />
                    <SimpleText additionalStyle={styles.headerText} text={strings.login["login-to-continue"]} />
                </View>
                <View style={styles.innerContainer}>
                    {
                        renderInputs()
                    }
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
export default Login;