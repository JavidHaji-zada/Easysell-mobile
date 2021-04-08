import React from 'react'
import { Text, TextStyle } from 'react-native';
import styles from './styles'

interface HeaderTextProps {
    text: string
    additionalStyle?: TextStyle
    capitalized?: boolean
}

function HeaderText(props: HeaderTextProps): JSX.Element {
    const { text, additionalStyle, capitalized } = props
    let finalText = text
    if (capitalized)
        finalText = finalText.toUpperCase();
    return (
        <Text style={[styles.text, additionalStyle]}>
            {finalText}
        </Text>
    )
}
export default HeaderText;