import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const SignUpSuccessNotification = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFf' }}>
    
    <View style={{ flex: 1 }}>
        {/* banner */}
        <Image
            style={{ width: '100%' ,height:250}}
            source={require('./SignInImages/PatternBg.png')}
        />
        {/* center heading */}
        <View style={{ alignItems: 'center', top: -60 }}>
            <Image
                source={require('./SignInImages/SuccessIcon.png')}
            />
            <Text style={{ color: '#15BE77', fontSize: 36, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, textAlign: 'center', marginTop: 16 }}>
                Congrats!
            </Text>
            <Text style={{ color: '#09051C', fontSize: 22, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, textAlign: 'center' }}>
                Your Profile Is Ready To Use
            </Text>
        </View>
        {/* Back btn */}
        <TouchableOpacity
            style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 32, borderRadius: 20, }}
            onPress={() => navigation.navigate("Login")}
        >
            <Text
                style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                Try Order
            </Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default SignUpSuccessNotification