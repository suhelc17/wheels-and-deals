
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import logo from '../../../assest/logo.png'
import arrow from '../../../assest/arrow.png'

const OnBoarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}
      />
      <Text style={styles.maintext}>
        Welcome to{'\n'}
        <Text >Wheels and Deals!</Text>
      </Text>


     <Text style={styles.subtext}>
  Get ready to experience a new level of convenience and efficiency right at your fingertips.
</Text>


      <Text style={styles.lasttext}> We're here to guide you on a quick tour to help you get started.</Text>

 <TouchableOpacity onPress={() => navigation.navigate('OnBoarding2')
 }>
      <View style={styles.backarrow}>
        <Image source={arrow} style={styles.arrow} />

      </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: 'rgba(194, 235, 255, 0.5)',
},

logo: {
  width: 150,
  height: 100,
  position: 'absolute',
  top: 80,
},

maintext: {
  color: '#A0025C',
  fontWeight: '700',
  fontSize: 26,
  textAlign: 'center',
  marginTop: 220,     
  marginBottom: 20,
},

brand: {
  fontSize: 28,
  fontWeight: '700',
  color: '#A0025C',
},

subtext: {
  
  color: '#A0025C',
  fontSize: 15,
  textAlign: 'center',     
  lineHeight: 20,
  width: '95%',          
  marginBottom: 80,
  },


lasttext: {
  color: '#A0025C',
  fontSize: 16,
  fontWeight: '600',
  textAlign: 'center',
  marginHorizontal: 30,
  marginBottom: 70,
},

backarrow: {
  backgroundColor: '#0073AB',
  borderRadius: 50,
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
},

})
