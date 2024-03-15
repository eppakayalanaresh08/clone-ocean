import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const data = [
    { id: '1', name: 'Spacy fresh carb', image: require('./HomeAssets/freshcrabTwo.png') },
    { id: '2', name: 'Cream', image: require('./HomeAssets/freshcrabone.png') },
    { id: '3', name: 'wheat', image: require('./HomeAssets/freshcrabthree.png') },
];

const OrderDetails = () => {
    const [count, setCount] = useState(1);
    const navigation = useNavigation();

    const incrementCounter = () => {
        setCount(count + 1);
    };

    const decrementCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const renderItem = ({ item, index }) => (
        // <Swipeout backgroundColor='#FFFFFF' right={[{ text: 'Delete', backgroundColor: '#ff6347' }]} autoClose={true}>
            <View style={styles.containerElement}>
                <View style={styles.OrderInsideContainer}>
                    <Image source={item.image} />
                    <View style={{width:responsiveWidth(40),marginLeft:responsiveWidth(1.2)}}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>{item.name}</Text>
                        <Text>Waroenk kita</Text>
                        <Text style={{ fontWeight: 'bold', color: '#15BE77' }}>$ 35</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }}>
                        <TouchableOpacity style={styles.DecrementContainer} onPress={decrementCounter}>
                            <Text style={{ fontWeight: 'bold', color: '#15BE77' }}>-</Text>
                        </TouchableOpacity>
                        <Text>{count}</Text>
                        <TouchableOpacity style={styles.IncrementContainer} onPress={incrementCounter}>
                            <Text style={{ fontWeight: 'bold', color: '#FFFFFF' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        // {/* </Swipeout> */}
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#FEFEFF' }}>

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
                <View style={{ marginLeft: 25, marginTop: responsiveHeight(1.3) ,marginBottom:responsiveHeight(2)}}>
                    <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, }}>
                        Order details
                    </Text>
                </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>









            <View
                    style={{ backgroundColor: '#15BE77',width:'100%', marginTop: 25, borderRadius: 5 ,paddingHorizontal:responsiveHeight(3),paddingTop:10,borderTopLeftRadius:20,borderTopRightRadius:20}}
                   
                >
                    <View style={styles.textContainer}>
                    <Text style={styles.textName}>
                        Sub-Total
                    </Text>
                    <Text style={styles.textName}>
                        120  $
                    </Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.textName}>
                        Delivery Charge
                    </Text>
                    <Text style={styles.textName}>
                        10  $
                    </Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.textName}>
                        Discount
                    </Text>
                    <Text style={styles.textName}>
                        120  $
                    </Text>
                    </View>
                    <View style={styles.textContainer}>
                    <Text style={{marginHorizontal:3,fontSize:20,color:'#FFFFFF',fontWeight:'bold'}}>
                        Total
                    </Text>
                    <Text style={{fontSize:20,color:'#FFFFFF',fontWeight:'bold'}}>
                        150  $
                    </Text>
                    </View>
                    <TouchableOpacity style={styles.orderButton} onPress={()=>navigation.navigate('Voucher')}>
                        <Text style={{color:'#15BE77',fontWeight:'bold'}}>Place My Order</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerElement: {
        flexDirection: 'column',
        borderColor: '#F4F4F4',
        borderRadius: 15,
        borderWidth: 2,
        shadowColor: '#F4F4F4',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        backgroundColor: '#FFFFFF',
        paddingHorizontal: responsiveWidth(2),
       
        marginBottom: responsiveHeight(2),
        borderRadius: 15,
        marginHorizontal:responsiveWidth(5)
    },
    OrderInsideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: responsiveHeight(1),
    },
    DecrementContainer: {
        backgroundColor: '#E7F8F1',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginRight: 10
    },
    IncrementContainer: {
        backgroundColor: '#15BE77',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginLeft: 10
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

    }
});

export default OrderDetails;
