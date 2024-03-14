import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


import React from 'react'

const OnBoardingScreenTwo = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      
      <View style={[{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: responsiveHeight(5), paddingBottom: 20 }]}>
        <View style={{ height: responsiveHeight(50) }}>
          <Image
            source={require('./OnBoardingImage/OnboardingImageTwo.png')}
            style={{ resizeMode: 'contain', width: '100%' }}
          />
        </View>
        <Text
          style={{ color: '#09051C', fontSize: 23, textAlign: 'center', fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, marginHorizontal: 50, marginTop: 10 }}>
          Food Ninja is Where Your Comfort Food Lives
        </Text>
        <Text
          style={{ color: '#000000', fontSize: 16, textAlign: 'center', fontWeight: 'normal', fontStyle: 'normal', lineHeight: 20, marginHorizontal: 66, marginTop: 20 }}>
          Enjoy a fast and smooth food delivery at your doorstep
        </Text>
        <LinearGradient colors={['#15BE77','#53E88B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} 
        style={{width:157,height:57,alignSelf: 'center',borderRadius: 20,marginTop: 44,}}
        >
        <TouchableOpacity
     
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 60, }}>
            Next
          </Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  )
}

export default OnBoardingScreenTwo