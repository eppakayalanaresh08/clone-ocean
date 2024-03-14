import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const PasswordResetSuccessful = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

    <View style={{ flex: 1 }}>
        {/* banner */}
        <Image
            style={{ width: '100%' , height:250}}
            source={require('./SignInImages/PatternBg.png')}
        />
        {/* center heading */}
        <View style={{ alignItems: 'center', top: -60 }}>
            <Image
                source={require('./SignInImages/SuccessIcon.png')}
            />
            <Text style={{ color: '#53E88B', fontSize: 36, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, textAlign: 'center', marginTop: 16 }}>
                Congrats!
            </Text>
            <Text style={{ color: '#09051C', fontSize: 22, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, textAlign: 'center' }}>
                Password reset succesful
            </Text>
        </View>
        {/* Back btn */}
        <TouchableOpacity
            style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 52, borderRadius: 20, }}
            onPress={() => navigation.navigate("Login")}
        >
            <Text
                style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                Back
            </Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default PasswordResetSuccessful

const styles = StyleSheet.create({})