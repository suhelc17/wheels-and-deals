import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../../components/customButton/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
    
    const handleLogout = async () => {
        await AsyncStorage.clear()
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <CustomButton
                buttonTitle={"Logout"}
                onPress={handleLogout}
            />
        </View>
    )
}

export default HomeScreen