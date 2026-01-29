import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthRoutes from './AuthRoutes'
import MainRoutes from "./MainRoutes"
import AsyncStorage from '@react-native-async-storage/async-storage'

const CheckRoute = () => {

    const [isLogin, setIsLogin] = useState(false)

    const getLoginState = async () => {
        const userData = await AsyncStorage.getItem("userData")
        console.log("userData==>", userData);
        if (userData) {
            setIsLogin(true)
        }else{
            setIsLogin(false)
        }
    }

    useEffect(() => {
        getLoginState()
    }, [])

    return (
        <NavigationContainer>
            {
                isLogin ? <MainRoutes /> : <AuthRoutes />
            }
        </NavigationContainer>
    )
}

export default CheckRoute