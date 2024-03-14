import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const CallForUser = () => {
    const navigation = useNavigation();

  return (
    <View style={{flex:1,  backgroundColor: '#FFFFFf' }}>
    {/* <StatusBar
       
    /> */}
    <View >
        {/* banner */}
        <Image
            style={{ width: '100%' ,height:240}}
            source={require('./HomeAssets/PatternBg.png')}
        />
        {/* center heading */}
        <View style={{ alignItems: 'center', top: -75 }}>
            <Image
                source={require('./HomeAssets/FinishOrder.png')}
            />
            
            <Text style={{ color: '#09051C', fontSize: 26, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, textAlign: 'center',marginTop:16 }}>
            Courtney Henry
            </Text>
            <Text style={{marginVertical:10,fontWeight:'bold',color:'#3B3B3B'}}>Ringing . . .</Text>
              <View style={{flexDirection:'row',marginTop:100}}>
                <TouchableOpacity>
              <Image
              style={{marginHorizontal:20}}
                source={require('./HomeAssets/SpeakerIcon.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('FinishOrder')}>
              <Image
                source={require('./HomeAssets/CloseIcon.png')}
            />
            </TouchableOpacity>
                
                </View>
        </View>
      
        {/* Back btn */} 
       
    </View>
</View>
  )
}

export default CallForUser

const styles = StyleSheet.create({
    containerEditReview:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#E8E8E8',
        borderWidth:1,
        marginHorizontal:20,
        paddingVertical:8,
        borderRadius:10
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
        SkipButtonElement:{
            backgroundColor:'#FFFFFF',
            shadowColor: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', 
            shadowOpacity: 5,
            shadowRadius: 3.84,
            elevation: 5,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            paddingHorizontal:30,
            paddingVertical:20,
            borderRadius:15
        }
})