import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const API_URL = 'https://jsonplaceholder.typicode.com/photos';


const ExploreRestaurant = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);

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
            <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetailMenu')}>
                <View style={styles.bgcontainerEachProduct}>
                    <Image
                        source={{ uri: item.thumbnailUrl }}

                        style={styles.imageStyle}

                    />

                    <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: 'bold', color: '#000000' }}>{` ${item.id}`}</Text>
                    {/* <Text style={{ fontSize: 15, marginVertical: 5 }}>{` ${item.money}`}</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView >
                <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'column', flex: 1 }}>
                    {/* header */}
                    <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 40, gap: 27, alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                        <View >
                            <Text style={{ color: '#09051C', fontSize: 30, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 38 }}>
                                Find Your {'\n'}Favorite Food
                            </Text>

                        </View>
                        <TouchableOpacity
                            style={{ height: 45, width: 45, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                            onPress={() => navigation.navigate('Notification')}
                        >
                            <Image
                                source={require('./HomeAssets/IconNotifiaction.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                        <View style={{ backgroundColor: '#fef6ed', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: 60, marginHorizontal: 3 }}>
                            <Image
                                style={{ marginHorizontal: 5, marginHorizontal: 15 }}
                                source={require('./HomeAssets/IconSearch.png')}
                            />
                            <TextInput
                                style={{ backgroundColor: '#fef6ed', fontSize: 16, fontWeight: 'normal', fontStyle: 'normal', color: '#ef9d68', borderRadius: 15 }}
                                placeholder='What do you want to order?'
                                placeholderTextColor='#ef9d68'
                            />
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 15 }}
                            onPress={() => navigation.navigate('Filter')}
                        >
                            <Image
                                source={require('./HomeAssets/FilterIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Nearest Restaurant */}
                    <View style={{ marginVertical: 20, marginHorizontal: 25, flexDirection: 'row', }}>
                        <Text style={{ color: '#09051C', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', }}>
                            Popular Restaurant
                        </Text>

                    </View>

                    <View style={{flexDirection:'row',  marginHorizontal: responsiveWidth(3) ,flexWrap:'wrap', }}>
                        {/* <ScrollView >
                            <FlatList
                            style={{ flex:1, flexWrap:'wrap'}}
                            horizontal
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </ScrollView> */}


                        
                    <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetailMenu')}>

                        <View style={styles.bgcontainerEachProduct}>
                                <Image
                                    source={require('./HomeAssets/RestaurantOne.png')}
                                />

                                <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: 'bold', color: '#000000' }}>Vegan Resto</Text>
                                <Text style={{ fontSize: 15, marginVertical: 5 }}>12 Mins</Text>
                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetailMenu')}>

                        <View style={styles.bgcontainerEachProduct}>
                            <Image
                                source={require('./HomeAssets/RestaurantTwo.png')}
                            />

                            <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: 'bold', color: '#000000' }}>Vegan Resto</Text>
                            <Text style={{ fontSize: 15, marginVertical: 5 }}>12 Mins</Text>

                        </View>
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetailMenu')}>

                        <View style={styles.bgcontainerEachProduct}>
                            <Image
                                source={require('./HomeAssets/RestaurantThree.png')}
                            />

                            <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: 'bold', color: '#000000' }}>Vegan Resto</Text>
                            <Text style={{ fontSize: 15, marginVertical: 5 }}>12 Mins</Text>

                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('RestaurentDetailMenu')}>

                        <View style={styles.bgcontainerEachProduct}>
                            <Image
                                source={require('./HomeAssets/RestaurantFour.png')}
                            />

                            <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: 'bold', color: '#000000' }}>Vegan Resto</Text>
                            <Text style={{ fontSize: 15, marginVertical: 5 }}>12 Mins</Text>

                        </View>
                        </TouchableOpacity> 

                    </View>





                    {/* Nearest Restaurant list */}

                </View>
            </ScrollView>
            <View style={styles.buttonHomeContainer}>
                <TouchableOpacity style={styles.homeButton}
                    onPress={() => navigation.navigate('HomePage')}
                >
                    <Image
                        source={require('./HomeAssets/Home.png')}
                    />
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, color: '#09051C' }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('./HomeAssets/HomeProfileIcon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
                    <Image
                        source={require('./HomeAssets/CartIcon.png')}
                    /></TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate('Message')}>
                    <Image
                        source={require('./HomeAssets/Chat.png')}
                    />
                    <Image style={{ top: -26, right: -10 }}
                        source={require('./HomeAssets/reddot.png')}
                    />

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ExploreRestaurant

const styles = StyleSheet.create({
    bgcontainerEachProduct: {
        width: responsiveWidth(42),
        height: responsiveHeight(28),
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
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 10,

    },

    buttonHomeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        // bottom: 20, // Adjust this value as needed
        // left: 0,
        // right: 0,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        marginHorizontal: 10,
        shadowRadius: 10,
        shadowOpacity: 0.6,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4
        }



    },
    homeButton: {
        backgroundColor: '#E7F8F1',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15
    },
    imageStyle: {
        width: 50, // Set your desired width
        height: 50, // Set your desired height
        resizeMode: 'cover', // or 'contain' or 'stretch' or 'repeat' as per your requirement
    },
})