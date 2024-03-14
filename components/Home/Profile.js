import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
    const navigation = useNavigation();

    return (
        <View style={{flex:1}}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.Container}>
    
        <Image style={{ width: '100%' }}
            source={require('./HomeAssets/ProfilePhoto.png')}
        />
         
        <View style={[styles.bgContainerProfile, { top: -60, paddingHorizontal: 30 }]}>
           
                <View style={{width:160, marginTop: 45,marginBottom:20,paddingHorizontal:30,paddingVertical:10, backgroundColor: '#ffeecf',borderRadius:15 }}>
                    <Text style={{color:'#FEAD1D',fontWeight:'bold',}}>Member Gold</Text>
                </View>
                <View style={styles.nameEditContainer}>
                    <Text style={styles.profileName}>Anam Wusono</Text>
                    <Image
                        source={require('./HomeAssets/EditIcon.png')}
                    />
                </View>
                <Text style={styles.gmailname}>anumwp66@gmail.com</Text>
                <View style={styles.containervoucher}>
                    <Image
                        source={require('./HomeAssets/VoucherIcon.png')}
                    />
                    <Text style={styles.Vouchername}>You Have 3 Vochers</Text>
                </View>
                <Text style={styles.favoriteheading}>Favorite</Text>
                <View style={styles.containerEachItem}>
                    <Image
                        source={require('./HomeAssets/freshcrabone.png')}
                    />
                    <View>
                        <Text style={styles.headingfoodname}>Spacy fresh crab</Text>
                        <Text style={styles.paragraphfoodname}>Waroenk kita</Text>
                        <Text style={styles.rupessname}>$ 35</Text>
                    </View>
                    <LinearGradient colors={['#15BE77', '#53E88B']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: 100, height: 38, alignItems: 'center', borderRadius: 20 }}
                    >
                        <TouchableOpacity onPress={()=>navigation.navigate('FoodItemDetailMenu')}>
                            <Text style={styles.buttonBuy}>Buy  Again</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
    
    
                <View style={styles.containerEachItem}>
                    <Image
                        source={require('./HomeAssets/freshcrabTwo.png')}
                    />
                    <View>
                        <Text style={styles.headingfoodname}>Spacy fresh crab</Text>
                        <Text style={styles.paragraphfoodname}>Waroenk kita</Text>
                        <Text style={styles.rupessname}>$ 35</Text>
                    </View>
                    <LinearGradient colors={['#15BE77', '#53E88B']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: 100, height: 38, alignItems: 'center', borderRadius: 20 }}
                    >
                        <TouchableOpacity onPress={()=>navigation.navigate('FoodItemDetailMenu')}>
                            <Text style={styles.buttonBuy}>Buy  Again</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={styles.containerEachItem}>
                    <Image
                        source={require('./HomeAssets/freshcrabthree.png')}
                    />
                    <View>
                        <Text style={styles.headingfoodname}>Spacy fresh crab</Text>
                        <Text style={styles.paragraphfoodname}>Waroenk kita</Text>
                        <Text style={styles.rupessname}>$ 35</Text>
                    </View>
                    <LinearGradient colors={['#15BE77', '#53E88B']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: 100, height: 38, alignItems: 'center', borderRadius: 20 }}
                    >
                        <TouchableOpacity onPress={()=>navigation.navigate('FoodItemDetailMenu')}>
                            <Text style={styles.buttonBuy}>Buy  Again</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
    
       
        </View>
       
    </View>
    </ScrollView>
    <View style={styles.buttonHomeContainer}>
                <TouchableOpacity
                onPress={()=>navigation.navigate('HomePage')}
                >
                <Image
                    source={require('./HomeAssets/Home.png')}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.homeButton} onPress={()=>navigation.navigate('Profile')}>
                    
                <Image
                    source={require('./HomeAssets/HomeProfileIcon.png')}
                />
                                <Text style={{fontWeight:'bold',marginLeft:10,color:'#09051C'}}>Profile</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                <Image
                    source={require('./HomeAssets/CartIcon.png')}
                /></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Message')}>
                <Image
                    source={require('./HomeAssets/NumbermsgChat.png')}
                />
                </TouchableOpacity>
            </View>
    </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container:{
        
        flex:1,
         },
         scrollView: {
             width:'100%'
       },
         bgContainerProfile: {
           
             backgroundColor: '#FFFFFF',
             borderTopLeftRadius: 50,
             borderTopRightRadius: 50
         },
      
         nameEditContainer: {
             flexDirection: 'row',
             justifyContent: 'space-between'
         },
         profileName: {
             fontSize: 25,
             fontWeight: 'bold'
         },
         gmailname: {
             color: '#3B3B3B'
         },
         containervoucher: {
             flexDirection: 'row',
             marginTop: 30,
     
             alignItems: 'center'
         },
     
         Vouchername: {
             color: '#09051C',
             fontWeight: 'bold',
             fontSize: 20,
             marginLeft: 20,
             marginBottom: 5
         },
         containerEachItem: {
     
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: "center",
             borderColor: '#F4F4F4',
     
             borderRadius: 15,
             borderWidth: 2, shadowColor: 'rgba(149, 157, 165, 0.2)', shadowOpacity: 0.5,
             shadowRadius: 3.84,
             elevation: 5,
             shadowOffset: {
                 width: 0,
                 height: 2,
             },
             backgroundColor: '#FFFFFF',
             paddingHorizontal: 5,
             marginVertical: 15
     
         },
         favoriteheading: {
             color: '#09051C',
             fontWeight: 'bold',
             fontSize: 20,
             marginVertical: 20
         },
         buttonBuy: {
             color: '#FFFFFF',
             fontSize: 13,
             fontWeight: 'bold',
             fontStyle: 'normal',
             paddingVertical: 10
     
     
         },
         rupessname: {
             color: '#1DB46B',
             fontSize: 23,
             fontWeight: 'bold',
             fontStyle: 'normal',
         },
         headingfoodname: {
             color: '#09051C',
             fontSize: 18,
             fontWeight: 'bold',
         },
         paragraphfoodname: {
             color: '#3B3B3B',
             fontSize: 14,
             lineHeight: 20,
             fontWeight: '500'
     
         },
         buttonHomeContainer: {
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems:'center',
            position: 'fixed',
            // bottom: 20, // Adjust this value as needed
            // left: 0,
            // right: 0,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            shadowColor: '#FFFFFF',
            marginHorizontal:10,
            shadowRadius: 10,
            shadowOpacity: 0.6,
            paddingVertical:10,
            paddingHorizontal:30,
            marginVertical:10,
            borderRadius:10,
            elevation: 8,
            shadowOffset: {
                width: 0,
                height: 4
            }
        },
        homeButton:{
            backgroundColor:'#E7F8F1',
    
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:10,
            paddingVertical:15,
            borderRadius:15
        }
})