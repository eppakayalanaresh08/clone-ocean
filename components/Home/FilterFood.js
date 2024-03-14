import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const data = [
    { id: '1', name: 'Spacy fresh carb', image: require('./HomeAssets/FoodOne.png'), money: '$7' },
    { id: '2', name: 'Cream', image: require('./HomeAssets/FoodTwo.png'), money: '$5' },
    { id: '3', name: 'wheat', image: require('./HomeAssets/FoodThree.png'), money: '$15' },
]


const FilterFood = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('FoodItemDetailMenu')}>
            <View
                style={[styles.containerElement]}
            >


                <View style={styles.OrderInsideContainer}>
                    <Image
                        source={item.image}
                    />
                    <View style={{ marginRight: 60 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Spacy fresh crab</Text>
                        <Text>Waroenk kita</Text>
                    </View>
                    <View

                        style={[styles.ProccessButton]}>
                        <Text style={{ fontWeight: 'bold', color: '#FEAD1D' }}>{`${item.money}`}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>

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

                 <TouchableOpacity style={styles.filterfoodbutton}>
                    <Text style={styles.soupElement}>Soup  X</Text>
                 </TouchableOpacity>


                 <View style={{marginHorizontal:30,marginTop:10}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Popular Menu</Text>
                 </View>


                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <FlatList


                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />


                </View>



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
                    <TouchableOpacity onPress={()=>navigation.navigate('OrderDetails')}>
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


            </View>

        </View>
    )
}

export default FilterFood

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
        backgroundColor: '#FFFFFF'

    },
    OrderInsideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'canter',
        paddingVertical: 10,
        marginTop: 10
    },
    ProccessButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 10
    },
    checkoutButton: {
        backgroundColor: '#15BE77',
        paddingVertical: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10


    },
    buttonHomeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
      
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
        },



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
    filterfoodbutton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#fef6ed' ,
     paddingVertical:12,
       width:100,
       marginVertical:10,
       marginHorizontal:22,
       borderRadius:10
    },
    soupElement:{
        color:'#DA6317',
        fontWeight:'bold'
    }

})