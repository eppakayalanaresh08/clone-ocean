import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';




const ChatDetails = () => {

    const navigation = useNavigation();
   
  


    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFf' }}>
            <ScrollView >
                    <Image
                        style={{ width: '100%', height: 270 }}
                        source={require('./HomeAssets/PatternBg.png')}
                    />
                    {/* center heading */}
                    <View style={{ top: -250 }}>
                        <View style={{ marginLeft: 5, marginTop: 20 }}>
                            <TouchableOpacity
                                style={{ paddingVertical: 14, paddingHorizontal: 10, backgroundColor: '#fff', alignSelf: 'flex-start', borderRadius: 15, }}
                                onPress={() => navigation.goBack()}
                            >
                                <Image
                                    source={require('./HomeAssets/IconBack.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 25, marginTop: 5 }}>
                            <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, marginBottom: 10 }}>
                                Chat
                            </Text>
                        </View>


                        <TouchableOpacity backgroundColor='#FFFFFF' onPress={() => navigation.navigate('CallForUser')} >
                            <View
                                style={styles.containerElement}
                            >


                                <View style={styles.OrderInsideContainer}>
                                    <Image
                                        source={require('./HomeAssets/ProfilechatOne.png')}
                                    />
                                    <View style={{ marginRight: 130 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Dianne Russell</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Image
                                                style={{ marginRight: 3 }}
                                                source={require('./HomeAssets/dotIcon.png')}
                                            />
                                            <Text style={{ marginTop: 6 }}>Online</Text>
                                        </View>
                                    </View>
                                    <View style={styles.callLogoContainer}>
                                        <Image
                                            source={require('./HomeAssets/Calllogo.png')}
                                        />
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <View style={styles.containerMsg}>
                            <View style={styles.textSecondPersonContainer}>
                                <Text>Just to order</Text>
                            </View>
                            <View style={styles.userMsgContainer}>
                                <Text style={{ color: '#FFFFFF', marginRight: 20 }}>Okay, for what level of spiciness?</Text>
                            </View>
                            <View style={styles.textSecondPersonContainer}>
                                <Text>Okay, wait a minute 👍</Text>
                            </View>
                            <View style={styles.userMsgContainer}>
                                <Text style={{ color: '#FFFFFF', marginRight: 20 }}>Okay I'm waiting  👍</Text>
                            </View>
                        </View>


                    </View>
                    </ScrollView>
                <View style={styles.MsgInputText}>
                    <TextInput
                        style={{ backgroundColor: '#fff', fontSize: 16, fontWeight: 'normal', fontStyle: 'normal', color: '#181818', borderRadius: 15, paddingRight: 190, paddingVertical: 15 }}
                        placeholder="Okay I'm waiting"
                        placeholderTextColor='#000000'
                    />
                    <TouchableOpacity>
                        <Image
                            source={require('./HomeAssets/IconSend.png')}
                        />
                    </TouchableOpacity>
                </View>
        

        </View>

    )
}

export default ChatDetails

const styles = StyleSheet.create({
    containerElement: {

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
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,

        borderRadius: 15,
        marginHorizontal: 10,

    },
    containerMsg: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20
    },
    OrderInsideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        // marginTop: 20
    },
    textSecondPersonContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#F6F6F6',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,

        marginTop: 5


    },
    userMsgContainer: {
        backgroundColor: '#15BE77',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 10,


    },

    MsgInputText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        shadowColor: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        shadowOpacity: 5,
        shadowRadius: 3.84,
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        paddingHorizontal: 30,
        // paddingVertical: 20,
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom:15,

    }, callLogoContainer: {
        backgroundColor: '#E7F8F1',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 25,
        marginTop: 10
    }
})