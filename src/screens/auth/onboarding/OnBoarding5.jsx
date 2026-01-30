import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

import stepimg from '../../../assest/Slide5.png'
import DotsIndicator from '../onboarding/DotsIndicator';


const OnBoarding4 = ({navigation}) => {
  return (
    <View style={styles.container} >
               <Image source={stepimg} style={styles.stepimg} />
   
   
               <View style={styles.textcontainer}>
               
                               <Text style={styles.steptitle} > Step 1 </Text>
               
                               <Text style={styles.steptext} >Your business details are registered and approved by authorised admin. Users can view and connect in listing page. Your listing is ready for public view.</Text>
               
                               
                           </View>
               
                           <View style={styles.bottomRow}>
                               <TouchableOpacity>
                                   <Text style={styles.skip}>Skip</Text>
                               </TouchableOpacity>
                <View style={styles.dotsWrapper}>
                    <DotsIndicator totalDots={5} activeIndex={3} />
                </View>
                               <TouchableOpacity  onPress={() => navigation.navigate('OnBoarding6')}
                               style={styles.nextBtn}>
                                   <Text style={styles.nextText}>Next</Text>
                               </TouchableOpacity>
                           </View>
               </View>
     )
   }

export default OnBoarding4 


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(194, 235, 255, 0.1)',
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 35,
        backgroundColor: 'rgba(153, 223, 255, 0.2)',
        marginTop: 40,
    },

    dotsWrapper: {
        marginBottom: 60,

        alignItems: 'center',
    },

    skip: {
        color: '#0073AB',
        fontSize: 16,
        fontWeight: 'bold',
    },

    nextBtn: {
        backgroundColor: '#0073AB',
        paddingHorizontal: 28,
        paddingVertical: 14,
        borderRadius: 8,
    },

    nextText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },


})