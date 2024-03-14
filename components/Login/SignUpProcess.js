import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SignUpProcess = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            {/* <StatusBar
        backgroundColor="#0D0D0D"
        barStyle="light-content"
    /> */}
            <View style={{ flex: 1 }}>
                {/* back btn */}
                <View style={{ marginLeft: 5, marginTop: 30 }}>
                    <TouchableOpacity
                        style={{ paddingVertical: 10, paddingHorizontal: 12, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('./SignInImages/IconBack.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* main heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#09051C', width: 300, fontSize: 30, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, }}>
                        Fill in your bio to get started
                    </Text>
                </View>
                {/* secondary heading */}
                <View style={{ marginLeft: 25, marginTop: 20 }}>
                    <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                        This data will be displayed in your account profile for security
                    </Text>
                </View>
                {/* input fields */}
                <View style={{ marginHorizontal: 25, marginTop: 20, }}>
                    <TextInput
                        style={styles.biotextInputContainer}
                        placeholder='First Name'
                        placeholderTextColor='#3B3B3B'
                        maxLength={20}
                    />
                    <TextInput
                        style={styles.biotextInputContainer}
                        placeholder='Last Name'
                        placeholderTextColor='#3B3B3B'
                        maxLength={20}
                    />
                    <TextInput
                        style={styles.biotextInputContainer}
                        placeholder='Phone Number'
                        placeholderTextColor='#3B3B3B'
                        keyboardType='number-pad'
                        maxLength={11}
                    />
                </View>
                {/* Next btn */}
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 70, borderRadius: 20, }}
                    onPress={() => navigation.navigate("PaymentMethod")}
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

export default SignUpProcess

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