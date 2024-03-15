import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const Voucher = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
 
    <View style={{ flex: 1 }}>
        {/* back btn */}
        <View style={{ marginLeft: 5, marginTop: 20 }}>
            <TouchableOpacity
                style={{ paddingVertical: 14, paddingHorizontal: 10, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('./HomeAssets/IconBack.png')}
                />
            </TouchableOpacity>
        </View>
        {/* main heading */}
        <View style={{ marginLeft: 25, marginTop: 5 }}>
            <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, }}>
                Voucher Promo
            </Text>
        </View>
       
        <View style={{ marginHorizontal: 20, marginTop: 20, gap:18 }}>
        <ImageBackground
        source={require('./HomeAssets/FrameOne.png')} // Specify the path to your image
        style={styles.backgroundImage}
      > 
         
         <Text style={styles.TextVoucher}>
            Special Deal For {'\n'} October
         </Text>
         <TouchableOpacity style={styles.buttonTextVoucher} onPress={()=>navigation.navigate('HomePage')}>
            <Text style={styles.orderVoucherbutton}>Order</Text>
         </TouchableOpacity>
       
          </ImageBackground>

          <ImageBackground
        source={require('./HomeAssets/FrameTwo.png')} // Specify the path to your image
        style={styles.backgroundImage}
      > 
         
         <Text style={[styles.TextVoucher,{color:'#6B3A5B'}]}>
            Special Deal For {'\n'} October
         </Text>
         <TouchableOpacity style={styles.buttonTextVoucher} onPress={()=>navigation.navigate('HomePage')}>
            <Text style={[styles.orderVoucherbutton,{color:'#6B3A5B'}]}>Order</Text>
         </TouchableOpacity>
       
          </ImageBackground>

        </View>
        {/* Next btn */}
      
    </View>
    <TouchableOpacity
            style={{ backgroundColor: '#15BE77',flexDirection:'row',justifyContent:'center', alignSelf: 'center', borderRadius: 20 ,marginBottom:15}}
            onPress={() => navigation.navigate("UserPaymentPage")}
        >
            <Text
                style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                Check out
            </Text>
        </TouchableOpacity>
</View>
  )
}

export default Voucher

const styles = StyleSheet.create({
    backgroundImage:{
        width:'100%',
        paddingVertical:responsiveHeight(1),
        resizeMode:'cover'
    },
    TextVoucher:{
        fontSize:responsiveFontSize(2),
        fontWeight:'bold',
        color:'#ffffff',
        marginLeft:200,
        lineHeight:responsiveHeight(3)
    },
    buttonTextVoucher:{
      backgroundColor:'#ffffff',
      paddingVertical:12,
      marginHorizontal:10,
      marginLeft:200,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:15,
       marginRight:30,
       marginTop:10
    },
    orderVoucherbutton:{
        color:'#009C51',
        fontWeight:'bold'
    }
})