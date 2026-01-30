

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/auth/splashscreen/SplashScreen'
import OnBoarding1 from './src/screens/auth/onboarding/OnBoarding1'

import OnBoarding2 from './src/screens/auth/onboarding/OnBoarding2';

import OnBoarding3 from './src/screens/auth/onboarding/OnBoarding3';

import OnBoarding4 from './src/screens/auth/onboarding/OnBoarding4';

import OnBoarding5 from './src/screens/auth/onboarding/OnBoarding5';
import OnBoarding6 from './src/screens/auth/onboarding/OnBoarding6';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
        <Stack.Screen name= "OnBoarding2" component ={OnBoarding2} />
        <Stack.Screen name= "OnBoarding3" component ={OnBoarding3} />
        <Stack.Screen name= "OnBoarding4" component ={OnBoarding4} />
        <Stack.Screen name= "OnBoarding5" component ={OnBoarding5} />
        <Stack.Screen name= "OnBoarding6" component ={OnBoarding6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
