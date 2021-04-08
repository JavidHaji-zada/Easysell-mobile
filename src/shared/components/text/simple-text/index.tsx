import React from 'react'
import { Text, TextStyle, View, ViewStyle } from 'react-native'
import styles from './styles'


interface SimpleTextProps {
    text: string;
    capitalized?: boolean
    additionalStyle?: TextStyle
    containerStyle?: ViewStyle
    required?: boolean
}

function SimpleText(props: SimpleTextProps): JSX.Element {
    const { text, capitalized, additionalStyle, containerStyle, required } = props
    let finalText = text;
    if (capitalized)
        finalText = finalText.toUpperCase();
    if (required)
        finalText += '*'
    return (
        <View style={containerStyle}>
            <Text style={[styles.text, additionalStyle]}>
                {finalText}
            </Text>
        </View>
    )
}
export default SimpleText