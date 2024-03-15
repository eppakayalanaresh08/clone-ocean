import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import axios from 'axios';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


// const data = [
//     { id: '1', name: 'Vegan Resto', money: '12 Mins', image: require('./HomeAssets/RestaurantOne.png') },
//     { id: '2', name: 'Healthy Food', money: '8 Mins', image: require('./HomeAssets/RestaurantTwo.png') },
//     { id: '3', name: 'Good Food', money: '12 Mins', image: require('./HomeAssets/RestaurantThree.png') },
//     { id: '4', name: 'Smart Resto', money: '8 Mins', image: require('./HomeAssets/RestaurantFour.png') },

// ];
const API_URL = 'https://jsonplaceholder.typicode.com/photos';




const HomePage = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const [searchText, setSearchText] = useState('');


   

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        // console.log(response.data)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  


    const renderItem = ({ item, index }) => (
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('RestaurentDetailMenu')}>
        <View style={styles.bgcontainerEachProduct}>
            <Image 
                            source={{uri: item.thumbnailUrl}}

                            style={styles.imageStyle}

            />
                        <Text style={{ fontSize: responsiveFontSize(1.5), marginVertical: 5, color: '#000000',textAlign:'center' }}>{` ${item.title}`}</Text>

          
            <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: 'bold', color: '#000000' }}>{` ${item.id}`}</Text>
            {/* <Text style={{ fontSize: 15, marginVertical: 5 }}>{` ${item.money}`}</Text> */}
        </View>
        </TouchableOpacity>
        </View>
    )

    const filteredData = data.filter(item => {
        return item.title && item.title.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
                   
                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 40, gap: 27, alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                        <View >
                            <Text style={{ color: '#09051C', fontSize: 30, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 38 }}>
                                Find Your {'\n'}Favorite Food
                            </Text>

                        </View>
                        <TouchableOpacity
                            style={{ height: 45, width: 45, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                            onPress={()=>navigation.navigate('Notification')}
                        >
                            <Image
                                source={require('./HomeAssets/IconNotifiaction.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: responsiveWidth(3), marginTop: 20 }}>
                        <View style={{ backgroundColor: '#fef6ed', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 60, marginHorizontal: responsiveWidth(1.3) }}>
                            <Image
                                style={{  marginHorizontal: responsiveWidth(2) }}
                                source={require('./HomeAssets/IconSearch.png')}
                            />
                            <TextInput
                                style={{ backgroundColor: '#fef6ed', fontSize:responsiveFontSize(2), fontWeight: 'normal', fontStyle: 'normal', color: '#ef9d68', borderRadius: 15 }}
                                placeholder='What do you want to order?'
                                placeholderTextColor='#ef9d68'
                                onChangeText={text => setSearchText(text)}

                            />
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 15 }}
                                            onPress={()=>navigation.navigate('Filter')}

                        >
                            <Image
                                source={require('./HomeAssets/FilterIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 25, marginTop: 20 }}>
                        <Image
                            style={{ width: '100%', borderRadius: 15 }}
                            source={require('./HomeAssets/AdvertisingBanner.png')}
                        />
                        <View style={{ position: 'absolute', alignSelf: 'flex-end', top: 16, right: 12, marginLeft: 40 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: responsiveFontSize(2.3), fontWeight: 'bold', fontStyle: 'normal' }}>
                                Special Deal for{'\n'} October
                            </Text>

                            <TouchableOpacity
                                style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 8, alignSelf: 'flex-start', marginTop: 12, borderRadius: 6 }}
                            >
                                <Text style={{ color: '#15BE77', fontSize: 15, fontWeight: 'bold', fontStyle: 'normal', }}>
                                    Buy Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginVertical: 20, marginHorizontal: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#09051C', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', }}>
                            Nearest Restaurant
                        </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('ExploreRestaurant')}>
                            <Text style={{ color: '#FF7C32', fontSize: 15, fontWeight: 'normal', fontStyle: 'normal', }}>
                                View More
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 15 }}>
                        <ScrollView >

                            <FlatList
                                horizontal

                                data={filteredData}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </ScrollView>
                    </View>
                   
                  

                </View>

            </ScrollView>
            <View style={styles.buttonHomeContainer}>
                <TouchableOpacity style={styles.homeButton} 
                onPress={()=>navigation.navigate('HomePage')}
                >
                <Image
                    source={require('./HomeAssets/Home.png')}
                />
                <Text style={{fontWeight:'bold',marginLeft:5,color:'#09051C'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal:20}} onPress={()=>navigation.navigate('Profile')}>
                <Image
                    source={require('./HomeAssets/HomeProfileIcon.png')}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
                <Image
                    source={require('./HomeAssets/CartIcon.png')}
                /></TouchableOpacity>
                <TouchableOpacity style={{marginTop:15}} onPress={()=>navigation.navigate('Message')}>
                <Image
                    source={require('./HomeAssets/Chat.png')}
                />
                 <Image style={{top:-26,right:-10}}
                    source={require('./HomeAssets/reddot.png')}
                />

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    bgcontainerEachProduct: {
        width:responsiveWidth(40),
        height:responsiveHeight(25),
        borderColor: '#F4F4F4',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2, shadowColor: '#F4F4F4', shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#FFFFFF',
        paddingVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(2),
        marginBottom:responsiveHeight(200)

    },

    buttonHomeContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        position: 'fixed',
      
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        marginHorizontal:responsiveWidth(3),
        shadowRadius: 10,
        shadowOpacity: 0.6,
        paddingVertical:responsiveHeight(1.2),
        paddingHorizontal:responsiveWidth(3.5),
        marginVertical:responsiveHeight(1.5),
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
        paddingVertical:10,
        borderRadius:15
    }
    ,
    imageStyle: {
        width: 100, // Set your desired width
        height: 100, // Set your desired height
        resizeMode: 'cover', // or 'contain' or 'stretch' or 'repeat' as per your requirement
      },
})