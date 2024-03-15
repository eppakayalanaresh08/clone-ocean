import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const FinishOrder = () => {
    const navigation = useNavigation();

  return (
    <View style={{flex:1,  backgroundColor: '#FFFFFf' }}>
    
    <ScrollView >
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
            Thank You! Order Completed
            </Text>
            <Text style={{marginVertical:10}}>Please rate your last Driver</Text>
            <Image 
              style={{marginTop:10}}
                source={require('./HomeAssets/FiveStarIcon.png')}
            />
           
        </View>
       
    </ScrollView>
    
    <View style={styles.containerEditReview}>
            <Image 
              style={{ marginLeft:responsiveWidth(5)}}
                source={require('./HomeAssets/ReviewEditIcon.png')}
            />
               <TextInput
                            style={styles.inputContainer}
                            placeholder='Leave Feedback'
                            placeholderTextColor='#3B3B3B'
                        />
    </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginVertical:responsiveHeight(1),marginHorizontal:responsiveWidth(5),}}>
            <LinearGradient colors={['#15BE77','#53E88B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} 
        style={{width:257,height:57,alignSelf: 'center',borderRadius: 20,justifyContent:'center',alignItems:'center',}}
        >
                <TouchableOpacity style={styles.ButtonSubmit} onPress={()=>navigation.navigate('RateFood')}>
                    <Text style={{color:'#FFFFFF',fontWeight:'bold',fontSize:responsiveFontSize(2)}}>Submit</Text>
                </TouchableOpacity>
              </LinearGradient>
                <TouchableOpacity style={styles.SkipButtonElement} onPress={()=>navigation.navigate('RateFood')}>
                    <Text style={{color:'#15BE77',fontWeight:'bold',fontSize:responsiveFontSize(2)}}>Skip</Text>
                </TouchableOpacity>
            </View>
</View>
  )
}

export default FinishOrder

const styles = StyleSheet.create({
    containerEditReview:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#E8E8E8',
    borderWidth:1,
    marginHorizontal:responsiveWidth(5),
    paddingVertical:8,
    borderRadius:10
    },

    inputContainer: {
        width:responsiveWidth(80),
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
        paddingHorizontal:responsiveWidth(5),
        paddingVertical:responsiveHeight(2),
        borderRadius:15
    }
})