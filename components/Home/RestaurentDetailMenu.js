import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';




const data = [
    { id: '1', name: 'Spacy fresh crab', money: '12 $', image: require('./HomeAssets/ItemOne.png') },
    { id: '2', name: 'Spacy fresh crab', money: '16 $', image: require('./HomeAssets/ItemTwo.png') },
    { id: '3', name: 'Spacy fresh crab', money: '15 $', image: require('./HomeAssets/ItemOne.png') },
    { id: '4', name: 'Spacy fresh crab', money: '14 $', image: require('./HomeAssets/ItemTwo.png') },
    { id: '5', name: 'Spacy fresh crab', money: '15 $', image: require('./HomeAssets/ItemOne.png') },

];



const RestaurentDetailMenu = () => {
    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <TouchableOpacity onPress={()=>navigation.navigate('FoodItemDetailMenu')}>
        <View style={styles.bgcontainerEachProduct}>
            <Image
                source={item.image}
            />

            <Text style={{ fontSize: 15, marginVertical: 5 }}>{` ${item.name}`}</Text>
            <Text style={{ fontSize: 15, marginVertical: 5 }}>{` ${item.money}`}</Text>

        </View>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.Container}>

                    <Image style={{ width: '100%' }}
                        source={require('./HomeAssets/RestaurantIcon.png')}
                    />

                    <View style={[styles.bgContainerProfile, { top: -85, paddingHorizontal: responsiveWidth(4) }]}>


                        <View style={styles.nameEditContainer}>
                            <View style={{ backgroundColor: '#E7F8F1', borderRadius: 15, paddingHorizontal: 10, paddingVertical: 10 }}>
                                <Text style={styles.profileName}>Popular</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                                <Image
                                    source={require('./HomeAssets/LocationfoodIcon.png')}
                                />
                                <Image
                                    style={{ marginLeft: 20 }}
                                    source={require('./HomeAssets/LoveIcon.png')}
                                />
                            </View>
                        </View>

                        <Text style={{ fontSize: 25, color: '#09051C', fontWeight: 'bold', marginVertical: 15 }}>Wijie Bar and Resto</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ marginRight: 5, }}
                                    source={require('./HomeAssets/LocationfoodIcon.png')}
                                />
                                <Text style={styles.textreview}>19 Km</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ marginLeft: 20, marginRight: 5 }}
                                    source={require('./HomeAssets/IconStar.png')}
                                />
                                <Text>4,8 Rating</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: '400', color: '#000000', marginBottom: 10, lineHeight: 20 }}>Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .</Text>
                        <View>

                            <ScrollView >
                                <FlatList
                                    horizontal

                                    data={data}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.id}
                                />

                            </ScrollView>
                            </View>

                        <Text style={styles.favoriteheading}>Testimonials</Text>
                        <View style={styles.containerEachItem}>
                            <Image
                                source={require('./HomeAssets/ProfileFoodIcon.png')}
                            />
                            <View style={{ marginLeft: 7 }}>
                                <Text style={styles.headingProfilename}>Dianne Russell</Text>
                                <Text style={styles.paragraphfoodname}>12 April 2021</Text>
                                <Text style={styles.TextReview}>This Is great, So delicious! You Must Here, With Your family . . </Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7F8F1', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 10, }}>
                                <Image
                                    source={require('./HomeAssets/5Star.png')}
                                />
                                <Text style={styles.starname}>5</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>


        


        </View>
    )
}

export default RestaurentDetailMenu

const styles = StyleSheet.create({
    Container: {

        flex: 1,
    },
    scrollView: {
        width: '100%'
    },
    bgContainerProfile: {

        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    nameEditContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    profileName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#15BE77'

    },
    textreview: {
        color: '#3B3B3B',
        fontWeight: '500',
    }
    ,
    bgcontainerEachProduct: {
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
        paddingHorizontal: 20,
        marginRight: 10
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
        paddingHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(1.5)

    },
    favoriteheading: {
        color: '#09051C',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15
    },
    starname: {
        color: '#15BE77',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        fontStyle: 'normal',

        marginLeft: responsiveWidth(0.8)


    },
    TextReview: {
        width: responsiveWidth(50),
        marginTop: responsiveHeight(1.5)

    },
    headingProfilename: {
        color: '#09051C',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginTop: responsiveHeight(2)
    },
    paragraphfoodname: {
        color: '#3B3B3B',
        fontSize: responsiveFontSize(1.5),
        lineHeight: responsiveHeight(2.2),
        fontWeight: '500'

    },
    fixedButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 20, // Adjust this value as needed
        left: 0,
        right: 0,

        alignItems: 'center',
        width: 370,
        height: 48,

        borderRadius: 15,
        marginVertical: 2,
        marginLeft: 20

    }
})