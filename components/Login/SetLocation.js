import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SetLocation = () => {
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
                Set Your Location
            </Text>
        </View>
        {/* secondary heading */}
        <View style={{ marginLeft: 15, marginTop: 10 ,marginRight:5}}>
            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                This data will be displayed in your account profile for security
            </Text>
        </View>
        {/* payment method btns */}
        <View style={{ marginHorizontal: 20, marginTop: 20, gap:18 }}>
            <View
                style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop:5}}
            >
                 <Image 
                       style={{marginRight:20}}
                    source={require('./SignInImages/LocationLogo.png')}
                />
                <Text style={{color:'#09051C',fontWeight:'bold',fontSize: 18,}}>Your Location </Text>
            </View>
          
            <TouchableOpacity
                style={[styles.containerElement,{marginTop:5}]}
            >
            
          <Text style={{color:'#09051C',fontWeight: 'bold',fontSize: 18,}}>Set Location</Text>
            </TouchableOpacity>
        </View>
        {/* Next btn */}
        <TouchableOpacity
            style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 160, borderRadius: 20, }}
            onPress={() => navigation.navigate("SignUpSuccess")}
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

export default SetLocation

const styles = StyleSheet.create({
    containerElement:{
        borderColor: '#FFFFFF',
    
        borderRadius: 15,
        borderWidth: 2, shadowColor: '#F4F4F4', shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        marginBottom: 12,
        borderRadius: 15,
        paddingVertical: 22,
        alignItems: 'center', 
      }
})