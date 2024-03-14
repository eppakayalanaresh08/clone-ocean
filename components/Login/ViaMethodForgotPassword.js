import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const ViaMethodForgotPassword = () => {
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
        <View style={{ marginLeft: 25, marginTop: 15 }}>
            <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, }}>
                Forgot password?
            </Text>
        </View>
        {/* secondary heading */}
        <View style={{ marginLeft: 25, marginTop: 10 }}>
            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                Select which contact details should we use to reset your password                    </Text>
        </View>
        {/* options btns */}
        <View style={{ marginHorizontal: 20, marginTop: 20, gap: 18 }}>
            <TouchableOpacity
                style={styles.TextContainerPassword}
            >
                <View style={{ flexDirection: 'row', marginLeft: 23, marginVertical: 20, alignItems: 'center', }}>
                    <Image
                        style={{ marginRight: 12 }}
                        source={require('./SignInImages/MessageTwo.png')}
                    />
                    <View style={{ marginVertical: 12 }}>
                        <Text style={{ color: '#828282', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 22, }}>
                            Via sms:
                        </Text>
                        <Text style={{ color: '#09051C', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, }}>
                            ···· ···· 4235
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.TextContainerPassword}
            >
                <View style={{ flexDirection: 'row', marginLeft: 23, marginVertical: 20, alignItems: 'center', }}>
                    <Image
                        style={{ marginRight: 12 }}
                        source={require('./SignInImages/EmailTwo.png')}
                    />
                    <View style={{ marginVertical: 12 }}>
                        <Text style={{ color: '#828282', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 22, }}>
                            Via email:
                        </Text>
                        <Text style={{ color: '#09051C', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, }}>
                            ········   @gmail.com
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        {/* Next btn */}
        <TouchableOpacity
            style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 60, borderRadius: 20, }}
            onPress={() => navigation.navigate("NewPassword")}
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

export default ViaMethodForgotPassword

const styles = StyleSheet.create({
    TextContainerPassword:{
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
    }
})