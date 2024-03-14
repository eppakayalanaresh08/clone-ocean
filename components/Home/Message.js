import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const data = [
    { id: '1', name: 'Anamwp', image: require('./HomeAssets/ProfilechatOne.png') },
    { id: '2', name: 'Guy Hawkins', image: require('./HomeAssets/ProfilechatTwo.png') },
    { id: '3', name: 'Leslie Alexander', image: require('./HomeAssets/ProfilechatThree.png') },

];


const Message = () => {



    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <TouchableOpacity backgroundColor='#FFFFFF' onPress={()=>navigation.navigate('ChatDetails')} >
            <View
                style={styles.containerElement}
            >


                <View style={styles.OrderInsideContainer}>
                    <Image
                        source={item.image}
                    />
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{`${item.name}`}</Text>
                        <Text style={{marginTop:6}}>Your Order Just Arrived!</Text>
                    </View>
                    <View >
                       <Text>20:00</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );







  return (
    <View style={{ flex: 1, }}>



    <View style={{ flex: 1 , backgroundColor: '#FEFEFF'}}>
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
                Chat
            </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20, gap: 18 }}>

            <FlatList


                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />



        </View>
        {/* Next btn */}
       
























    </View>

    <View style={styles.buttonHomeContainer}>
                <TouchableOpacity  
                onPress={()=>navigation.navigate('HomePage')}
                >
                <Image
                    source={require('./HomeAssets/HomelightIcon.png')}
                />
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
                <TouchableOpacity style={styles.homeButton} onPress={()=>navigation.navigate('Message')}>
               
                <Image
                    source={require('./HomeAssets/chatMessageIcon.png')}
                />
                <Text style={{fontWeight:'bold',marginLeft:5,color:'#09051C'}}>Chat</Text>
                </TouchableOpacity>
            </View>
</View>
  )
}

export default Message

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
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        marginBottom: 12,
        borderRadius: 15,

    },
    textNameOrder: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap'

    }
    , containernameText: {
        marginLeft: 8
    },
    OrderElementContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    OrderInsideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginTop: 10
    },

    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:3
    },
    textName:{
        color:'#FEFEFF',
        fontWeight:'bold',
        fontSize:17,

    },
    orderButton:{
        backgroundColor:'#FFFFFF',
        paddingVertical:18,
        marginBottom:10,
        borderRadius:10,
        flexDirection:'flex',
        justifyContent:'center',
        alignItems:'center'

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
        paddingVertical:10,
        borderRadius:15
    }
})