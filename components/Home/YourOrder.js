import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const data = [
    { id: '1',  image: require('./HomeAssets/FoodOne.png') ,buttonProcess:'#15BE77',bgColor:'#FFFFFF'},
    { id: '2',  image: require('./HomeAssets/FoodTwo.png') ,buttonProcess:'#15BE77',bgColor:'#FFFFFF'},
    { id: '3',  image: require('./HomeAssets/FoodThree.png'),buttonProcess:'#D9D9D9',bgColor:'#F6F6F6' },
    { id: '4', image: require('./HomeAssets/MenuItemThree.png'),buttonProcess:'#D9D9D9' ,bgColor:'#F6F6F6'},
]


import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const YourOrder = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');


    const filteredData = data.filter(item => {
        const searchTextLower = searchText.toLowerCase();
        return item.id === searchTextLower || searchTextLower === '';
      });
    const renderItem = ({ item }) => (

        <View
            style={[styles.containerElement,{backgroundColor:`${item.bgColor}`}]}
        >


            <View style={styles.OrderInsideContainer}>
                <Image
                    source={item.image}
                />
                <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Spacy fresh crab</Text>
                    <Text>Waroenk kita</Text>
                    <Text style={{ fontWeight: 'bold', color: '#15BE77' }}>$ 35</Text>
                </View>
                <TouchableOpacity 
        onPress={()=>navigation.navigate('OrderDetails')}
                style={[styles.ProccessButton,{backgroundColor:`${item.buttonProcess}`}]}>
                    <Text style={{color:'#ffffff',fontWeight:'bold'}}>Proccess</Text>
                </TouchableOpacity>
            </View>

        </View>

    );


    return (
        <View style={{ flex: 1 }}>

            <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'column', flex: 1 }}>
                {/* header */}
                <View style={{ flexDirection: 'row', marginLeft: 25, marginRight: 40, gap: 27, alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }}>
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
                    <View style={{ backgroundColor: '#fef6ed', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: responsiveWidth(14), marginHorizontal: 3 }}>
                        <Image
                            style={{  marginHorizontal: responsiveWidth(2) }}
                            source={require('./HomeAssets/IconSearch.png')}
                        />
                        <TextInput
                            style={{ backgroundColor: '#fef6ed', fontSize: responsiveFontSize(2), fontWeight: 'normal', fontStyle: 'normal', color: '#ef9d68', borderRadius: 15 }}
                            placeholder='What do you want to order?'
                            placeholderTextColor='#ef9d68'
                            onChangeText={text => setSearchText(text)}


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



                <View style={{marginTop:20,paddingHorizontal:10,marginHorizontal:responsiveWidth(2)}}>
                    <FlatList


                        data={filteredData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />


                </View>



      
                {/* Nearest Restaurant list */}

            </View>
            <View style={{position:'fixed',marginBottom:5}}>
            <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate('OrderDetails')}>
            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Check Out</Text>
          </TouchableOpacity>
          </View>


        </View>
    )
}

export default YourOrder

const styles = StyleSheet.create({
    containerElement: {
        flexDirection: 'column',
        borderColor: '#F4F4F4',

        borderRadius: 15,
        borderWidth: 2, shadowColor: '#F4F4F4', shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        marginBottom: 12,
        borderRadius: 15,

    },
    OrderInsideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'canter',
        paddingVertical: 10,
        marginTop: 10
    },
    ProccessButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        height:40,
        borderRadius:10
    },
    checkoutButton:{
        backgroundColor:'#15BE77',
        paddingVertical:15,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:10


    }
})