import { StyleSheet, Text, View ,ImageBackground,TextInput,Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const TrackOrder = () => {
    const navigation = useNavigation();

  return (

 
    <View style={styles.container}>
      <ImageBackground
        source={require('./HomeAssets/MapsImage.png')} 
        style={styles.backgroundImage}
      >

      <View style={{ marginLeft: responsiveWidth(3.5), marginTop: responsiveHeight(5) ,alignSelf:'flex-start' }}>
            <TouchableOpacity
                style={{ paddingVertical: responsiveHeight(1.8), paddingHorizontal: responsiveWidth(2.5), backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('./HomeAssets/IconBack.png')}
                />
            </TouchableOpacity>
        </View>
        <View>
        <Image style={{marginLeft:responsiveWidth(41)}}
                    source={require('./HomeAssets/CarTrack.png')}
                />
        </View>


        <View style={styles.userTrackContainer}>
          <Text style={{marginVertical:responsiveHeight(1),fontWeight:'bold'}}>Track Order</Text>
          <View style={{flexDirection:'row'}}>
          <Image 
                    source={require('./HomeAssets/ProfileLocation.png')}
                />

                <View style={{marginHorizontal:responsiveWidth(2)}}>
                    <Text style={{fontWeight:'bold'}}>Mr Kemplas</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:responsiveHeight(1)}}>
                        <Image style={{marginRight:responsiveWidth(1)}} source={require('./HomeAssets/Iconmaps.png')}/>
                        <Text>25 minutes on the way</Text>
                    </View>
                </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.callButton} onPress={()=>navigation.navigate('CallForUser')}>
          <Image
                    source={require('./HomeAssets/CalllogoIcon.png')}
                />
                <Text style={{marginLeft:responsiveWidth(2),fontWeight:'bold',color:'#15BE77'}}>Call</Text>

          </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('ChatDetails')}>
           <Image 
            
           style={{height:responsiveHeight(8),width:responsiveWidth(20),}}
                    source={require('./HomeAssets/MessageButton.png')}
                />
           </TouchableOpacity>
          </View>

        </View>
      </ImageBackground>
    
    </View>


  )
}

export default TrackOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
        minHeight:responsiveHeight(100),
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'cover', // Or 'contain' depending on your requirement
         // Optional: Align your content
      },
   
    
      textlocation:{
        fontWeight:'bold',
        
      },
      userTrackContainer:{
        backgroundColor:'#FAFDFF',
        alignSelf:'flex-end',
        marginHorizontal:responsiveWidth(7),
        paddingVertical:responsiveHeight(1.5),
        borderRadius:10,
        top:responsiveHeight(-7),
        paddingHorizontal:responsiveWidth(3)

      },
      callButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // paddingVertical:10,
        // paddingHorizontal:100,
        width:responsiveWidth(61),
        marginTop:responsiveHeight(3),

        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        shadowOpacity: 5,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
      }
})