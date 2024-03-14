import { StyleSheet, Text, View ,ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import {
  responsiveHeight,
 
} from "react-native-responsive-dimensions";


const SetLocationUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./HomeAssets/Maps.png')} // Specify the path to your image
        style={styles.backgroundImage}
      >
                  <View style={{ backgroundColor: '#FFFFFF',alignSelf:'flex-start', borderRadius: 15, flexDirection: 'row',justifyContent:'flex-start',alignItems:'center',paddingVertical:10, marginHorizontal: 15,marginTop:responsiveHeight(3),width:'90%' }}>
                        <Image
                            style={{ marginHorizontal: 5, marginHorizontal: 15 }}
                            source={require('./HomeAssets/IconSearch.png')}
                        />
                        <TextInput
                            style={{ backgroundColor: '#ffffff', fontSize: 16, fontWeight: 'normal', fontStyle: 'normal', color: '#ef9d68', borderRadius: 15,paddingVertical:8 }}
                            placeholder='FInd Your Location'
                            placeholderTextColor='#DA6317'
                        />
                    </View>
                    <View style={{flex:0.8,alignSelf:'center', marginTop:responsiveHeight(15)}}>
                      <Image  source={require('./HomeAssets/PinRadar.png')}/>
                    </View>

                    <View style={styles.containersetlocation}>
                      <Text>
                      Your Location
                      </Text>
                      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                      <Image style={{marginRight:10,marginLeft:10,marginTop:10}}  source={require('./HomeAssets/LocationIcon.png')}/>
                     <Text style={styles.textlocation}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
                      </View>
                      <TouchableOpacity style={styles.setlocationContainer} onPress={()=>navigation.navigate('EditLocation')}>
                        <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Set Location</Text>
                      </TouchableOpacity>

                    </View>
      </ImageBackground>
    </View>
  )
}

export default SetLocationUser

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    resizeMode: 'cover', // Or 'contain' depending on your requirement
  },
  containersetlocation:{
    alignSelf:'flex-end',
    backgroundColor:'#ffffff',
    marginHorizontal:20,
    borderRadius:15,
    paddingVertical:10,
    paddingHorizontal:20

  },
  setlocationContainer:{
    backgroundColor:'#15BE77',
    paddingVertical:20,

    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
    borderRadius:10
  },
  textlocation:{
    fontWeight:'bold',
    fontSize:15,
    marginRight:5
    
  }
})