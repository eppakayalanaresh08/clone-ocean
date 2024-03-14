import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const SignInPage = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <ScrollView>
           
            <View style={{ flex: 1 }}>
             
                <View >
                    <Image
                        style={{ width: '100%',height:responsiveHeight(40), resizeMode: 'cover', }}
                        source={require('./SignInImages/PatternBg.png')}
                    />
                    <View style={{ alignItems: 'center', position: 'absolute', left: 80, right: 80, marginTop: 50 }}>
                        <Image
                            source={require('./SignInImages/Logo.png')}
                        />
                        <Text style={{ color: '#15BE77', fontSize: 27, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5 }}>
                            Ocean Of Bake
                        </Text>
                        <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 0.5 }}>
                            Deliever Favorite Food
                        </Text>
                    </View>
                </View>
            
                <View>
                    <Text style={{ color: '#09051C', fontSize: 20, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 60, textAlign: 'center' }}>
                        Login In Your Account
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20 }}>
                    <TextInput
                        style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 12, color: '#3B3B3B' , borderColor: '#F4F4F4', 
                        borderWidth: 2,     shadowColor: '#F4F4F4', shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },

                      }}
                        placeholder='Email'
                        placeholderTextColor='#3B3B3B'
                       
                    />
                    <TextInput
                        style={{ backgroundColor: '#FFFFFF', paddingHorizontal: 28, fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, borderRadius: 15, paddingVertical: 12, color: '#3B3B3B' ,shadowColor: '#F4F4F4', borderColor: '#F4F4F4',    borderWidth: 2,   shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        }, }}
                        placeholder='Password'
                        placeholderTextColor='#3B3B3B'
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text style={{ color: '#09051C', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 10 }}>
                        Or Continue With
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 20, marginHorizontal: 25, justifyContent: 'space-evenly', }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 ,shadowColor: '#F4F4F4', shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },  borderWidth: 2, borderColor: '#F4F4F4'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 16, }}>
                            <Image
                                source={require('./SignInImages/facebook.png')}
                            />
                            <Text style={{ color: '#09051C', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', marginLeft: 12 }}>
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor:'#FFFFFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 ,  borderWidth: 2, borderColor: '#F4F4F4'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 16, }}>
                            <Image
                                source={require('./SignInImages/googleicon.png')}
                            />
                            <Text style={{ color: '#09051C', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', marginLeft: 12 }}>
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("VerificationCode")}>
                    <Text style={{ color: '#53E88B', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 12,  borderBottomColor: '#53E88B', borderBottomWidth: 1, }}>
                        Forgot Your Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 5, borderRadius: 20, }}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 15, paddingVertical: 17, paddingHorizontal: 50, }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("Signup")}
                    >
                    <Text style={{ color: '#53E88B', fontSize: 14, fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 12, textDecorationLine: 'underline' }}>
                        Don't have an account?
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
  )
}

export default SignInPage