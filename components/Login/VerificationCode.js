import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const VerificationCode = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
 
    <View style={{ flex: 1 }}>
        {/* back btn */}
        <View style={{ marginLeft: 5, marginTop: 30 }}>
            <TouchableOpacity
                style={{ paddingVertical: 14, paddingHorizontal: 10, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('./SignInImages/IconBack.png')}
                />
            </TouchableOpacity>
        </View>
        {/* main heading */}
        <View style={{ marginLeft: 15, marginTop: 5, marginRight:5}}>
            <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, }}>
                Enter 4-digit Verification code 
            </Text>
        </View>
        {/* secondary heading */}
        <View style={{ marginLeft: 15, marginTop: 10 ,marginRight:5}}>
            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                Code send to +6282045**** this code will  expired in 1:30
            </Text>
        </View>
        {/* payment method btns */}
        <View style={{ marginHorizontal: 20, marginTop: 20, gap:18 }}>
            
          
           
            <TextInput
                        style={styles.biotextInputContainer}
                        placeholder='OTP'
                        placeholderTextColor='#3B3B3B'
                        keyboardType='number-pad'
                        maxLength={11}
                    />
        </View>
        {/* Next btn */}
        <TouchableOpacity
            style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 220, borderRadius: 20, }}
            onPress={() => navigation.navigate("ForgotPassword")}
        >
            <Text
                style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                Next
            </Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default VerificationCode

const styles = StyleSheet.create({
  biotextInputContainer: {
    borderColor: '#F4F4F4',

    borderRadius: 15,
    borderWidth: 2, shadowColor: '#F4F4F4', shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.5,
    marginBottom: 12,
    borderRadius: 15,
    paddingVertical: 16,
    color: '#3B3B3B'
}
})