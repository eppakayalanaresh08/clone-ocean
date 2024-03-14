import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditPaymentpage = () => {
    const navigation = useNavigation();

    return (


        <View style={{ flex: 1, backgroundColor: '#FEFEFF' }}>



            <View style={{ flex: 1 }}>
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
                        Payment
                    </Text>
                </View>

                <View style={{ marginHorizontal: 20, marginTop: 20, gap: 18 }}>

                    <View
                        style={styles.containerElement}
                    >
                        
                        <View style={styles.OrderInsideContainer}>
                            <Image
                                source={require('./HomeAssets/paypalLogo.png')}
                            />
                            <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: 'bold', marginRight: 20 ,color:'#3B3B3B'}}>2121 6352 8465 ****</Text>
                        </View>

                    </View>


                    <View
                        style={[styles.containerElement, { backgroundColor: '#F6F6F6' }]}
                    >

                        <View style={styles.OrderInsideContainer}>
                            <Image
                              style={{height:20}}
                                source={require('./HomeAssets/visaIcon.png')}
                            />
                            <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: '400', marginRight: 20,color:'#3B3B3B' }}>2121 6352 8465 ****</Text>
                        </View>

                    </View>

                    <View
                        style={[styles.containerElement, { backgroundColor: '#F6F6F6' }]}
                    >

                        <View style={styles.OrderInsideContainer}>
                            <Image
                                                          style={{height:20}}

                                source={require('./HomeAssets/Payoneerlogo.png')}
                            />
                            <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: '400', marginRight: 20 ,color:'#3B3B3B'}}>2121 6352 8465 ****</Text>
                        </View>

                    </View>




                </View>

            </View>
        </View>

    )
}

export default EditPaymentpage

const styles = StyleSheet.create({
    containerElement: {
        flexDirection: 'column',
        borderColor: '#F4F4F4',

        borderRadius: 15,
        borderWidth: 2, shadowColor: '#F4F4F4', shadowOpacity: 0.5,
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
        paddingVertical: 22,

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
        paddingVertical: 10
    },
    editbutton: {
        color: '#15BE77',
        fontSize: 15,
        fontWeight: 'bold'
    }
})