import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import stepimg from '../../../assest/group.png';


import DotsIndicator from '../onboarding/DotsIndicator';
const OnBoarding2 = ({ navigation }) => {
    return (
        <View style={styles.container} >

            <Image source={stepimg} style={styles.stepimg} />

            <View style={styles.textcontainer}>

                <Text style={styles.steptitle} > Step 1 </Text>

                <Text style={styles.steptext} >To register your business information choose drawer icon to view the drawer menu.</Text>

                <Text style={styles.steptitle} > Step 2 </Text>

                <Text style={styles.steptext}>
                    Enter your basic business information in create account and sign in.
                    Your profile is ready.
                </Text>
            </View>

            <View style={styles.bottomRow}>


                <TouchableOpacity>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>


                <View style={styles.dotsWrapper}>
                    <DotsIndicator totalDots={5} activeIndex={0} />
                </View>


                <TouchableOpacity
                    onPress={() => navigation.navigate('OnBoarding3')}
                    style={styles.nextBtn}
                >
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

export default OnBoarding2;


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