import { View, Image, ImageBackground, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import back from '../../../assest/back.png';
import logo from '../../../assest/logo.png';

const { width, height } = Dimensions.get('window');

 
const SplashScreen = () => {
     const navigation = useNavigation(); 

  useEffect(() => {
     // 3 sec after
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding'); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);


  return (
    
    <ImageBackground 
      source={back} 
      style={styles.backg} 
      resizeMode="cover"        
    >
      <Image source={logo} style={styles.logo} />
      
      <ActivityIndicator
        size="large"
        color="#0073AB"
        style={styles.loader}
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  backg: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'rgba(194, 235, 255, 0.2)',
  },

  logo: {
    width: 230,
    height: 172,
    resizeMode: 'cover',
  },

  loader: {
    position: 'absolute',
    bottom: height * 0.25, // for responsive  
  },
});
