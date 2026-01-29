import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomButton from "../../../components/customButton/CustomButton"
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
    const [email, setEmail] = useState("")

    const handleLogin = async () => {
        try {
            const loginData = {
                email: email,
            }
            const res = await AsyncStorage.setItem('userData', JSON.stringify(loginData));
            console.log("res", res);

        } catch (error) {
            console.log("error in login", error);

        }

    }

    return (
        <View>
            <TextInput
                style={{ borderWidth: 2, padding: 6 }}
                placeholder='Email'
                value={email}
                onChangeText={(e) => {
                    setEmail(e)
                }}
            />
            <CustomButton
                buttonTitle={"Login"}
                onPress={handleLogin}
            />
        </View>
    )
}

export default Login