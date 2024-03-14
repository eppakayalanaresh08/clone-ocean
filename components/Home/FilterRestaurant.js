import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const FilterRestaurant = () => {
    const navigation = useNavigation();
    const lessthenten='>10 Km  X'


  return (
    <View style={{ flex: 1 }}>
    <ScrollView>
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

            <View style={{flexDirection:'row',marginTop:10}}>
                <TouchableOpacity style={styles.filternamecontainer}>
                    <Text style={styles.TextFilterElement}>{lessthenten}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filternamecontainer}>
                    <Text style={styles.TextFilterElement}>Soup X</Text>
                </TouchableOpacity>
            </View>

            {/* Nearest Restaurant */}
            <View style={{ marginVertical: 20, marginHorizontal: 25, flexDirection: 'row', }}>
                <Text style={{ color: '#09051C', fontSize: 18, fontWeight: 'bold', fontStyle: 'normal', }}>
                    Popular Restaurant
                </Text>

            </View>

            <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginHorizontal: 10 }}>




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
</View>
  )
}

export default FilterRestaurant

const styles = StyleSheet.create({
    bgcontainerEachProduct: {
        width:180,
        height:200,
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
        paddingVertical: 20,
        marginHorizontal: 5,
        marginVertical: 10,

    },

    buttonHomeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
       
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
    filternamecontainer:{
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
    TextFilterElement:{
        color:'#DA6317',
        fontWeight:'bold'
    }
})