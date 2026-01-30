import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import stepimg from '../../../assest/three.png'
import DotsIndicator from '../onboarding/DotsIndicator';

const OnBoarding3 = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Image source={stepimg} style={styles.stepimg} />


            <View style={styles.textcontainer}>

                <Text style={styles.steptitle} > Step 1 </Text>

                <Text style={styles.steptext} >View your preformance reports in report card.</Text>
                <Text style={styles.steptitle} > Step 2 </Text>

                <Text style={styles.steptext}>
                    To add all your business use Add + in listing details. Multiple listing can be added using Add + in listing details.
                </Text>

            </View>

            <View style={styles.bottomRow}>


                <TouchableOpacity>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>


                <View style={styles.dotsWrapper}>
                    <DotsIndicator totalDots={5} activeIndex={1} />
                </View>


                <TouchableOpacity
                    onPress={() => navigation.navigate('OnBoarding4')}
                    style={styles.nextBtn}
                >
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default OnBoarding3;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(194, 235, 255, 0.1)',


    },

    stepimg: {
        width: '80%',
        height: '55%',
        resizeMode: 'contain',
        alignItems: 'center',
        marginHorizontal: 40,


    },

    textcontainer: {
        marginBottom: 10,


    },
    steptitle: {
        fontSize: 20,
        color: '#A0025C',
        fontWeight: '700',
        marginHorizontal: 5,


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
        marginTop: 60,
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