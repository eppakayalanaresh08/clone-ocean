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
import { SafeAreaView } from 'react-native-safe-area-context';

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
                    <Text style={{ fontSize: responsiveFontSize(1.6), fontWeight: 'bold', }}>Spacy fresh crab</Text>
                    <Text style={{ fontSize: responsiveFontSize(1.3)}}>Waroenk kita</Text>
                    <Text style={{fontSize: responsiveFontSize(1.4), fontWeight: 'bold', color: '#15BE77' }}>$ 35</Text>
                </View>
                <TouchableOpacity 
        onPress={()=>navigation.navigate('OrderDetails')}
                style={[styles.ProccessButton,{backgroundColor:`${item.buttonProcess}`}]}>
                    <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:responsiveFontSize(1.5)}}>Proccess</Text>
                </TouchableOpacity>
            </View>

        </View>

    );


    return (
        <SafeAreaView style={{ flex: 1 }}>


            <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'column', flex: 1 }}>
                {/* header */}
                <View style={{ flexDirection: 'row', marginHorizontal:responsiveWidth(5),  alignItems: 'center', justifyContent: 'space-between', marginTop: responsiveHeight(3) }}>
                    <View >
                        <Text style={{ color: '#09051C', fontSize: responsiveFontSize(3), fontWeight: 'bold', fontStyle: 'normal', lineHeight: responsiveHeight(3.5) }}>
                            Find Your {'\n'}Favorite Food
                        </Text>

                    </View>
                    <TouchableOpacity
                        style={{ height: responsiveHeight(3),  backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        onPress={() => navigation.navigate('Notification')}
                    >
                        <Image
                            source={require('./HomeAssets/IconNotifiaction.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginHorizontal: responsiveWidth(6), marginTop: responsiveHeight(2) }}>
                    <View style={{ backgroundColor: '#fef6ed', borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingRight: responsiveWidth(14), marginRight:responsiveWidth(3) }}>
                        <Image
                            style={{  marginHorizontal: responsiveWidth(2) }}
                            source={require('./HomeAssets/IconSearch.png')}
                        />
                        <TextInput
                            style={{ backgroundColor: '#fef6ed', fontSize: responsiveFontSize(1.8),paddingRight:responsiveWidth(4), fontWeight: 'normal', fontStyle: 'normal', color: '#ef9d68', borderRadius: 15}}
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



                <View style={{marginTop:responsiveHeight(2.5),paddingHorizontal:responsiveWidth(3),marginHorizontal:responsiveWidth(2)}}>
                    <FlatList


                        data={filteredData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />


                </View>



      
                {/* Nearest Restaurant list */}

            </View>
            <View style={{position:'fixed',marginBottom:responsiveHeight(2)}}>
            <TouchableOpacity style={styles.checkoutButton} onPress={()=>navigation.navigate('OrderDetails')}>
            <Text style={{color:'#ffffff',fontWeight:'bold'}}>Check Out</Text>
          </TouchableOpacity>
          </View>


        </SafeAreaView>
    )
}

export default YourOrder

const styles = StyleSheet.create({
    containerElement: {
        flexDirection: 'column',
        borderColor: '#F4F4F4',

        borderRadius: 15,
        borderWidth: responsiveWidth(0.4), shadowColor: '#F4F4F4', shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        paddingHorizontal: responsiveWidth(2.5),
        
        marginBottom: responsiveHeight(1.5),
        borderRadius: 15,

    },
    OrderInsideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'canter',
        paddingVertical: responsiveHeight(1.2),
    },
    ProccessButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:responsiveWidth(2.5),
        height:responsiveHeight(5),
        borderRadius:10
    },
    checkoutButton:{
        backgroundColor:'#15BE77',
        paddingVertical:responsiveHeight(1.8),
        marginHorizontal:responsiveWidth(5),
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:10


    }
})