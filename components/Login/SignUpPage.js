
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View,ScrollView } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  

export default function SignUpPage() {
    const navigation = useNavigation();

    return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1 }}>
                    <ScrollView>

            {/* <StatusBar
                backgroundColor="#FFFFFF"
                barStyle="Dark-content"
            /> */}
            <View style={{  flex: 1}}>
                {/* header */}
                <View >
                    <Image
                        style={{ width: '100%', height: responsiveHeight(40), resizeMode: 'cover', }}
                        source={require('./SignInImages/PatternBg.png')}
                    />
                    <View style={{ alignItems: 'center', position: 'absolute', left: 90, right: 90, marginTop: responsiveHeight(5) }}>
                        <Image
                            source={require('./SignInImages/Logo.png')}
                        />
                        <Text style={{ color: '#53E88B', fontSize:25, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5 }}>
                            Ocean Of Bakes

                        </Text>
                        <Text style={{ color: '#09051C', fontSize: 13, fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 0.5 }}>
                            Deliever Favorite Food
                        </Text>
                    </View>
                </View>
                {/* login heading */}
                <View>
                    <Text style={{ color: '#09051C', fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, textAlign: 'center' }}>
                        Sign Up For Free
                    </Text>
                </View>
                {/* input fields */}
                <View style={{marginHorizontal:8}}>
                    <View style={styles.textInputContainer}>
                        <Image
                            style={styles.imageTextinput}
                            source={require('./SignInImages/Profile.png')}
                        />
                        <TextInput
                            style={styles.inputContainer}
                            placeholder='Name'
                            placeholderTextColor='#3B3B3B'
                        />
                    </View>
                    <View style={styles.textInputContainer}>

                        <Image
                            style={styles.imageTextinput}
                            source={require('./SignInImages/Message.png')}
                        />
                        <TextInput
                            style={styles.inputContainer}
                            placeholder='Email'
                            placeholderTextColor='#3B3B3B'
                        />
                    </View>
                    <View style={styles.textInputContainer}>

                        <Image
                            style={styles.imageTextinput}
                            source={require('./SignInImages/Lock.png')}
                        />
                        <TextInput
                            style={styles.inputContainer}
                            placeholder='Password'
                            placeholderTextColor='#3B3B3B'
                            secureTextEntry
                        />
                    </View>
                </View>
                {/* checks */}
                <View style={{ marginHorizontal: 25, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: responsiveHeight(1.5) }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#15BE77', justifyContent: 'center', alignItems: 'center', height: 22, width: 22, borderRadius: 12, }}
                        >
                            <Image

                                source={require('./SignInImages/check.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: '#000000', fontSize: responsiveFontSize(1.7), fontWeight: 'normal', fontStyle: 'normal', }}>
                            Keep Me Signed In
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#15BE77', justifyContent: 'center', alignItems: 'center', height: 22, width: 22, borderRadius: 12, }}
                        >
                            <Image

                                source={require('./SignInImages/check.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ color: '#000000', fontSize: responsiveFontSize(1.7), fontWeight: 'normal', fontStyle: 'normal', }}>
                            Email Me About Special Pricing
                        </Text>
                    </View>
                </View>
                {/* Create Account btn */}
                <LinearGradient colors={['#15BE77', '#53E88B']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ alignSelf: 'center', borderRadius: 20, marginTop: 30 }}
                >
                    <TouchableOpacity
                        style={{ alignSelf: 'center', borderRadius: 20, }}
                        onPress={() => navigation.navigate("SignupProcess")}
                    >
                        <Text
                            style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: responsiveHeight(2.5), paddingHorizontal: responsiveWidth(5), }}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
                {/* Already have an account? */}
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ color: '#53E88B', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: responsiveHeight(2), textDecorationLine: 'underline' }}>
                        Already have an account?
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
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

        marginHorizontal: 10,
        marginBottom: 12,

    },
    inputContainer: {
        width:350,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#3B3B3B'
    },
    imageTextinput: {
        marginHorizontal:5,
        marginRight:5,
        width:18
    }
})