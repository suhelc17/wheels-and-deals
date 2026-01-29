import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './Styles'

const CustomButton = ({
    buttonTitle,
    buttonStyles,
    onPress
}) => {
    return (
        <TouchableOpacity 
        style={[Styles.buttonContainer, buttonStyles]}
        onPress={onPress}
        >
            <Text style={{ color: '#fff' }}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton