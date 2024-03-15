import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'


import React from 'react'
import { useNavigation } from '@react-navigation/native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const OnBoardingScreenOne = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageElementContainer}>
                <Image
                    source={require('./OnBoardingImage/OnboardingImageOne.png')}
                    style={styles.imageElement}
                />
            </View>
            <Text
                style={styles.headingElement}>
                Find your  Comfort Food here
            </Text>
            <Text
                style={styles.paragraphElement}>
                Here You Can find a chef or dish for every taste and color. Enjoy!
            </Text>
            <TouchableOpacity
                style={styles.nextbuttonElement}
                onPress={() => navigation.navigate("OnBoardingScreenTwo")}
            >
                <Text
                    style={styles.nextbuttonTextElement}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>




    )
}

export default OnBoardingScreenOne


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: responsiveHeight(10),
        paddingBottom: responsiveHeight(20)
    },
    imageElementContainer: {
        height: responsiveHeight(50)

    },
    imageElement: {
        resizeMode: 'contain',
        width: '100%'
    },
    headingElement: {
        color: '#09051C',
        width: 220,
        fontSize: 21,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 30,
        marginHorizontal: 95,
        marginTop: 38
    },
    paragraphElement: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 20,
        marginHorizontal: 66,
        marginTop: 20
    },
    nextbuttonElement: {
        backgroundColor: '#D9D9D9',
        width: 157,
        height: 50,
        alignSelf: 'center',
        marginTop: 44,
        marginBottom: 200,
        borderRadius: 20,
    },
    nextbuttonTextElement: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 20,
        paddingVertical: 14,
        paddingHorizontal: 60,
    }

});
