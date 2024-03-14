import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';



const FoodItemDetailMenu = () => {
    const navigation = useNavigation();
  

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.Container}>

                    <Image style={{ width: '100%' }}
                        source={require('./HomeAssets/foodItem.png')}
                    />

                    <View style={[styles.bgContainerProfile, { top: -85, paddingHorizontal: 30 }]}>


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

                        <Text style={{ fontSize: 25, color: '#09051C', fontWeight: 'bold', marginVertical: 15 }}>Rainbow Sandwich Sugarless</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ marginRight: 5 }}
                                    source={require('./HomeAssets/IconStar.png')}
                                />
                                <Text style={styles.textreview}>4,8 Rating</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ marginLeft: 20, marginRight: 5 }}
                                    source={require('./HomeAssets/shoppingbag.png')}
                                />
                                <Text>2000+ Order</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: '400', color: '#000000', marginBottom: 10 }}>Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur
                            deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.
                            Strowberry Cream wheat Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.</Text>


                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, marginVertical: 5 }}>1 Spacy fresh carb</Text>
                        <Text style={{ fontSize: 15, marginVertical: 5 }}>2 Cream</Text>

                        <Text style={{ fontSize: 15, marginVertical: 5 }}>3 wheat</Text>


                            
                        </View>

                        <Text style={{ marginVertical: 10 }}>Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.</Text>
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


            <TouchableOpacity onPress={() => navigation.navigate('YourOrder')}>

            <LinearGradient colors={['#15BE77', '#53E88B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.fixedButton}
            >
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }}>Add To Cart</Text>
            </ LinearGradient>
            </TouchableOpacity>



        </View>
    )
}

export default FoodItemDetailMenu

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
        paddingHorizontal: 3,
        marginVertical: 10

    },
    favoriteheading: {
        color: '#09051C',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15
    },
    starname: {
        color: '#15BE77',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',

        marginLeft: 5


    },
    TextReview: {
        // marginHorizontal:10,
        width: 200,
        marginTop: 20

    },
    headingProfilename: {
        color: '#09051C',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    paragraphfoodname: {
        color: '#3B3B3B',
        fontSize: 14,
        lineHeight: 20,
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