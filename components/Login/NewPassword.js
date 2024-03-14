import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const NewPassword = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

    <View style={{ flex: 1 }}>
        {/* back btn */}
        <View style={{ marginLeft: 5, marginTop: 30 }}>
            <TouchableOpacity
                style={{ paddingVertical: 14, paddingHorizontal: 18, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('./SignInImages/IconBack.png')}
                />
            </TouchableOpacity>
        </View>
        {/* main heading */}
        <View style={{ marginLeft: 25, marginTop: 20 }}>
            <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, }}>
                Reset your password here
            </Text>
        </View>
        {/* secondary heading */}
        <View style={{ marginLeft: 25, marginTop: 20 }}>
            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                Select which contact details should we use to reset your password                    </Text>
        </View>
        {/* input fields */}
        <View style={{ marginHorizontal: 25, marginTop:20 }}>
            <TextInput
                style={styles.NewPasswordContainer}
                placeholder='New Password'
                placeholderTextColor='#3B3B3B'
                secureTextEntry
            />
            <TextInput
                style={styles.NewPasswordContainer}
                placeholder='Confirm Password'
                placeholderTextColor='#3B3B3B'
                secureTextEntry
            />
        </View>
        {/* Next btn */}
        <TouchableOpacity
            style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 108, borderRadius: 20, }}
            onPress={() => navigation.navigate("PasswordResetSuccessful")}
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

export default NewPassword

const styles = StyleSheet.create({
    NewPasswordContainer:{
        backgroundColor: '#FFFFFF',
        borderColor: '#F4F4F4',

        borderRadius: 15,
        borderWidth: 2, shadowColor: '#F4F4F4', shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        paddingHorizontal: 28, 
        fontSize: 16, 
        fontWeight: 'bold',
         fontStyle: 'normal',
          letterSpacing: 0.5, 
          marginBottom: 12,
        paddingVertical: 16, 
        color: '#3B3B3B'
    }
})