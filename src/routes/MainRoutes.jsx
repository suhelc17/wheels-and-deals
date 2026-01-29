import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/main/homeScreen/HomeScreen';

const Stack = createNativeStackNavigator();
const MainRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainRoutes