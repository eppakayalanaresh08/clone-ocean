import { StyleSheet, Text, View ,ImageBackground,TextInput,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const TrackOrder = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./HomeAssets/MapsImage.png')} 
        style={styles.backgroundImage}
      >
      
      <View style={{ marginLeft: 5, marginTop: 50 ,alignSelf:'flex-start' }}>
            <TouchableOpacity
                style={{ paddingVertical: 14, paddingHorizontal: 10, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('./HomeAssets/IconBack.png')}
                />
            </TouchableOpacity>
        </View>
        <View>
        <Image style={{marginLeft:207}}
                    source={require('./HomeAssets/CarTrack.png')}
                />
        </View>


        <View style={styles.userTrackContainer}>
          <Text style={{marginVertical:8,fontWeight:'bold'}}>Track Order</Text>
          <View style={{flexDirection:'row'}}>
          <Image 
                    source={require('./HomeAssets/ProfileLocation.png')}
                />

                <View style={{marginHorizontal:10}}>
                    <Text style={{fontWeight:'bold'}}>Mr Kemplas</Text>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <Image style={{marginRight:6}} source={require('./HomeAssets/Iconmaps.png')}/>
                        <Text>25 minutes on the way</Text>
                    </View>
                </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.callButton} onPress={()=>navigation.navigate('CallForUser')}>
          <Image
                    source={require('./HomeAssets/CalllogoIcon.png')}
                />
                <Text style={{marginLeft:10,fontWeight:'bold',color:'#15BE77'}}>Call</Text>

          </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('ChatDetails')}>
           <Image 
            
           style={{height:60,width:100,}}
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
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'cover', // Or 'contain' depending on your requirement
         // Optional: Align your content
      },
      containersetlocation:{
        backgroundColor:'#ffffff',
        marginHorizontal:10,
        borderRadius:15,
        marginTop:100,
        paddingVertical:10,
        paddingHorizontal:10
    
        
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
        
      },
      userTrackContainer:{
        backgroundColor:'#FAFDFF',
        alignSelf:'flex-end',
        marginHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        top:-50,
        paddingHorizontal:15

      },
      callButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // paddingVertical:10,
        // paddingHorizontal:100,
        width:250,
        marginTop:22,

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