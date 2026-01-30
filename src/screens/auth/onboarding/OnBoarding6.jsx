import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import stepimg from '../../../assest/slide6.png'
import DotsIndicator from '../onboarding/DotsIndicator';
import { flushValue } from 'react-native/types_generated/Libraries/Animated/nodes/AnimatedValue';
const OnBoarding6 = () => {
  return (
    <View style={styles.container} >
               <Image source={stepimg} style={styles.stepimg} />
   
   
               <View style={styles.textcontainer}>
               
                               <Text style={styles.steptitle} > Step 1 </Text>
               
                               <Text style={styles.steptext} >Multiple category are designed for public convince. Each category has multiple sub category for easy navigation of information. Scroll home page for more information.</Text>
               
                               
                           </View>
               
                           <View style={styles.bottomRow}>
                               
                                      <View style={styles.dotsWrapper}> </View>
                    <DotsIndicator totalDots={5} activeIndex={4} />
                               <TouchableOpacity  style={styles.getBtn}>
                                   <Text style={styles.getText}>Get Started</Text>
                               </TouchableOpacity>
                           </View>
                         

               </View>
     )
   }

export default OnBoarding6 


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(194, 235, 255, 0.2)',
        marginTop : 45,

    },
    stepimg: {
        width: '100%',
        height: '55%',
        resizeMode: 'contain',
    },
    textcontainer: {
     marginTop : 63,

    },
    steptitle: {
        fontSize: 20,
        color: '#A0025C',
        fontWeight: '700',
        marginHorizontal : 5,



    },

    steptext: {
        color: '#A0025C',
        fontSize: 14,
        width: '100%',
        marginBottom: 10,
        padding: 10,
        lineHeight: 18,
        


    },
   bottomRow: {
  marginTop: 'auto',          // pushes section to bottom
  alignItems: 'center',
  paddingVertical: 10,
  backgroundColor: 'rgba(153, 223, 255, 0.2)',
},

getBtn: {
  backgroundColor: '#0073AB',
  paddingHorizontal: 40,
  paddingVertical: 14,
  borderRadius: 8,
  marginTop: 20,              // space between dots & button
},

getText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

        


    skip: {
        color: '#0073AB',
        fontSize: 16,
        fontWeight: 'bold',
    },

   dotsWrapper: {
  marginBottom: 20,
},





})