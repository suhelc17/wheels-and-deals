import { View, Image, ImageBackground, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import back from '../../../assest/back.png';
import mid from '../../../assest/mid.png';

const { width, height } = Dimensions.get('window');

 
const SplashScreen = () => {
     const navigation = useNavigation(); 

  useEffect(() => {
     // 3 sec after
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding'); 
    }, 300000);

    return () => clearTimeout(timer); 
  }, []);


  return (
    
    <ImageBackground 
      source={back} 
      style={styles.backg} 
      resizeMode="cover"        
    >
      <Image source={mid} style={styles.mid} />
      
      <ActivityIndicator
        size="large"
        color="#0A5ED7"
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
  },

  mid: {
    width: 230,
    height: 172,
    resizeMode: 'cover',
  },

  loader: {
    position: 'absolute',
    bottom: height * 0.25, // for responsive  
  },
});
