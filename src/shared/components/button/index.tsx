import React, { CSSProperties, ReactNode, useState } from 'react'
import { ActivityIndicator, Pressable, ViewStyle } from 'react-native';

import styles from './styles'
import { APP_COLORS } from '../../styles';

interface ButtonProps {
    buttonStyle?: ViewStyle,
    onPress: () => void,
    children: ReactNode
    loading?: boolean
}

function Button(props: ButtonProps): JSX.Element {
    const { buttonStyle, onPress, children, loading } = props
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Pressable
            style={[styles.container, buttonStyle, {
                backgroundColor: hovered ? APP_COLORS.HOVER.gray : (buttonStyle?.backgroundColor || 'white')
            }]}
            onPress={onPress}>
            {
                loading ? (
                    <ActivityIndicator color={'blue'} size={24} />
                ) : (
                    children
                )
            }
        </Pressable>
    )
}

export default Button