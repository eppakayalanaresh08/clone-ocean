import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

const RateFood = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

            <ScrollView >
                <Image
                    style={{ width: '100%', height: 240 }}
                    source={require('./HomeAssets/PatternBg.png')}
                />
                {/* center heading */}
                <View style={{ alignItems: 'center', top: -80 }}>
                    <Image
                        source={require('./HomeAssets/RateFood.png')}
                    />

                    <Text style={{ color: '#09051C', fontSize: 26, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, textAlign: 'center', marginTop: 16 }}>
                        Thank You! Enjoy Your Meal
                    </Text>
                    <Text style={{ marginVertical: 10 }}>Please rate your Food</Text>
                    <Image
                        style={{ marginTop: 10 }}
                        source={require('./HomeAssets/FiveStarIcon.png')}
                    />

                </View>
            </ScrollView>



            <View style={{     position: 'fixed',}}>
            <View style={styles.containerEditReview}>
                    <Image
                        style={{ marginLeft: 20, }}
                        source={require('./HomeAssets/ReviewEditIcon.png')}
                    />
                    <TextInput
                        style={styles.inputContainer}
                        placeholder='Leave Feedback'
                        placeholderTextColor='#3B3B3B'
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10, marginRight: 10, marginBottom: 20 }}>
                    <LinearGradient colors={['#15BE77', '#53E88B']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: 250, height: 50, alignSelf: 'center', borderRadius: 15, justifyContent: 'center', alignItems: 'center', }}
                    >
                        <TouchableOpacity style={styles.ButtonSubmit} onPress={() => navigation.navigate('RateRestaurent')}>
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 18 }}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    <TouchableOpacity style={styles.SkipButtonElement} onPress={() => navigation.navigate('RateRestaurent')}>
                        <Text style={{ color: '#15BE77', fontWeight: 'bold', fontSize: 18 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RateFood

const styles = StyleSheet.create({
    containerEditReview: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        marginHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10
    },

    inputContainer: {
        width: 350,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#3B3B3B'
    },
    SkipButtonElement: {
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        shadowOpacity: 5,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15
    }
})