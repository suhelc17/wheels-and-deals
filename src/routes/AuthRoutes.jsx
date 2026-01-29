import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/login/Login';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthRoutes