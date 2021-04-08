import strings from '@shared/translations'
import React from 'react'
import { TextInput, View, ViewStyle } from 'react-native'
import { APP_COLORS } from '../../styles'
import SimpleText from '../text/simple-text'
import styles from './styles'

type InputType = "password" | "text"

interface InputProps {
    value: string
    placeholder: string
    showLabel?: boolean
    required?: boolean
    label?: string
    additionalStyles?: ViewStyle
    inputStyles?: ViewStyle
    onChangeText: (text: string) => void;
    showError?: boolean
    errorText?: string
    secure?: boolean
}

function Input(props: InputProps): JSX.Element {
    const { value, placeholder, additionalStyles, inputStyles, required, showLabel, secure, label, onChangeText, showError, errorText } = props

    return (
        <View style={additionalStyles}>
            {
                showLabel && label.length > 0 && (
                    <SimpleText
                        text={label}
                        required={required}
                        capitalized
                        additionalStyle={{ fontWeight: 'bold' }}
                    />
                )
            }
            {
                <TextInput
                    secureTextEntry={secure}
                    value={value}
                    style={[styles.input, inputStyles]}
                    placeholder={placeholder}
                    onChangeText={(text) => onChangeText(text)}
                />
            }
            {
                showError && errorText && (
                    <SimpleText
                        text={errorText}
                        additionalStyle={styles.errorText}
                    />
                )
            }
        </View>
    )
}

export default Input