import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleText from '@shared/components/text/simple-text';
import Input from '@shared/components/input';
import Button from '@shared/components/button';
import AuthService from '@shared/services/auth-service';
import { LangCode } from '@shared/utils/localization';
import Error_CODES from '@shared/libs/error-codes';
import { Helper } from '@shared/libs/helper';
import strings from '@shared/translations';
import { APP_COLORS, APP_STYLES } from '@shared/styles';
import styles from './styles';

function Register(props): JSX.Element {
    const { navigation } = props;
    // input values
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [nameError, setNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false)
    const [emailError, setEmaiError] = useState(false);
    const [passError, setPassError] = useState(false)
    const [confirmPassError, setConfirmPassError] = useState(false)
    const [unequalPassError, setUnequalPassError] = useState(false);
    const [invalidEmailError, setInvalidEmailError] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [currentLang, setCurrentLang] = useState<LangCode>('en-US');
    const [registerLoading, setRegisterLoading] = useState(false)

    function onRegisterPress(): void {
        if (!name) {
            setNameError(true)
            return
        }
        if (!surname) {
            setSurnameError(true)
            return
        }
        if (!email) {
            setEmaiError(true)
            return
        }
        if (!Helper.validateEmail(email)) {
            setInvalidEmailError(true)
            return
        }
        if (!pass) {
            setPassError(true)
            return
        }
        if (!confirmPass) {
            setConfirmPassError(true)
            return
        }
        if (confirmPass !== pass) {
            setUnequalPassError(true)
            return
        }
        setRegisterLoading(true)
        AuthService.register(email, pass, name, surname, currentLang)
            .then((res) => {
            }).catch((err) => {
                setRegisterLoading(false)
                switch (err.code) {
                    case Error_CODES.FIREBASE_ERROR_CODES.AUTH_ERROR.EMAIL_ALREADY_EXISTS: {
                        setRegisterError(strings.register.error['email-already-in-use'])
                        break
                    } case Error_CODES.FIREBASE_ERROR_CODES.AUTH_ERROR.INVALID_ARGUMENT: {
                        setRegisterError(strings.register.error['invalid-argument'])
                        break
                    } case Error_CODES.FIREBASE_ERROR_CODES.AUTH_ERROR.INVALID_EMAIL: {
                        setRegisterError(strings.register.error['invalid-email'])
                        break
                    } case Error_CODES.FIREBASE_ERROR_CODES.AUTH_ERROR.WEAK_PASSWORD: {
                        setRegisterError(strings.register.error['invalid-password'])
                        break
                    }
                    case Error_CODES.FIREBASE_ERROR_CODES.AUTH_ERROR.INVALID_PASSWORD: {
                        setRegisterError(strings.register.error['invalid-password'])
                        break
                    }
                    case Error_CODES.FIREBASE_ERROR_CODES.GENERAL_ERRORS.INTERNAL_ERROR: {
                        setRegisterError(strings.errors['internal-error'])
                        break
                    }
                    default: {
                        setRegisterError(err.message)
                    }
                }
            })
    }

    function onLoginPress(): void {
        navigation.navigate('Login')
    }

    function resetErrors(): void {
        setEmaiError(false)
        setInvalidEmailError(false)
        setPassError(false)
        setUnequalPassError(false)
        setNameError(false)
        setSurnameError(false)
        setRegisterError('')
    }

    function renderInputs(): JSX.Element {
        return (
            <View style={styles.inputs}>
                {/* <ReactFlagsSelect
                    className='flag-selector'
                    countries={["US", "TR", "AZ"]}
                    defaultCountry="US"
                    customLabels={{ "US": "EN-US", "TR": "Türkçe", "AZ": "Azərbaycanca" }}
                    onSelect={(countryCode: string) => {
                        switch (countryCode) {
                            case "US": {
                                languageActions.next({ value: 'en-US' })
                                setCurrentLang('en-US')
                                break
                            } case "TR": {
                                languageActions.next({ value: 'tr-TR' })
                                setCurrentLang('tr-TR')
                                break
                            } case "AZ": {
                                languageActions.next({ value: "az-Latn-AZ" })
                                setCurrentLang('az-Latn-AZ')
                                break
                            }
                        }
                    }}
                /> */}
                <Input
                    value={name}
                    placeholder={strings.common.name}
                    showLabel
                    required
                    label={strings.common.name}
                    onChangeText={(name: string) => {
                        resetErrors()
                        setName(name)
                    }}
                    additionalStyles={styles.inputContainer}
                    showError={nameError}
                    errorText={strings.errors["field-empty"]}
                />
                <Input
                    value={surname}
                    placeholder={strings.common.surname}
                    showLabel
                    required
                    label={strings.common.surname}
                    onChangeText={(surname: string) => {
                        resetErrors()
                        setSurname(surname)
                    }}
                    additionalStyles={styles.inputContainer}
                    showError={surnameError}
                    errorText={strings.errors["field-empty"]}
                />
                <Input
                    value={email}
                    placeholder={strings.common["e-mail"]}
                    showLabel
                    required
                    label={strings.common["e-mail"]}
                    onChangeText={(email: string) => {
                        resetErrors()
                        setEmail(email)
                    }}
                    additionalStyles={styles.inputContainer}
                    showError={emailError || invalidEmailError}
                    errorText={invalidEmailError ? strings.register.error['invalid-email-format'] : strings.register.error['error-empty-field']}
                />
                <Input
                    value={pass}
                    placeholder={strings.common.password}
                    secure
                    showLabel
                    required
                    label={strings.common.password}
                    onChangeText={(pass: string) => {
                        resetErrors()
                        setPass(pass)
                    }}
                    additionalStyles={styles.inputContainer}
                    showError={passError}
                    errorText={strings.errors["field-empty"]}
                />
                <Input
                    value={confirmPass}
                    placeholder={strings.register["confirm-password"]}
                    secure
                    showLabel
                    required
                    label={strings.register["confirm-password"]}
                    onChangeText={(pass: string) => {
                        setConfirmPassError(false)
                        setUnequalPassError(false)
                        setConfirmPass(pass)
                    }}
                    additionalStyles={styles.inputContainer}
                    showError={confirmPassError || unequalPassError}
                    errorText={unequalPassError ? strings.register.error['unequal-pass'] : strings.errors["field-empty"]}
                />
                <Button
                    onPress={onRegisterPress}
                    buttonStyle={styles.registerButton}
                    loading={registerLoading}
                >
                    <SimpleText additionalStyle={styles.registerText} text={strings.register.register} />
                    <AntDesign name='arrowright' style={styles.registerIcon} size={16} color={APP_COLORS.gray} />
                </Button>
                {
                    registerError.length > 0 && (
                        <SimpleText text={registerError} additionalStyle={APP_STYLES.errorText} />
                    )
                }
                <View style={styles.loginButtonContainer}>
                    <Button
                        onPress={onLoginPress}
                        buttonStyle={styles.loginButton}
                    >
                        <SimpleText additionalStyle={styles.newAccountText} text={strings.login.login} />
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
                    {/* <HeaderText
                        text={strings.login.welcome}
                        additionalStyle={styles.headerTextBold} /> */}
                    {/* <Text style={styles.headerText}>{strings.login["login-to-continue"]}</Text> */}
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
export default Register;