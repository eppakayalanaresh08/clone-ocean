import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const UploadPhoto = () => {
    const navigation = useNavigation();
   

    return (
     

            <View style={{ flex: 1 ,backgroundColor: '#FFFFFF' }}>
                {/* back btn */}
                <View style={{ marginLeft: 5, marginTop: 30 }}>
                    <TouchableOpacity
                        style={{ paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderRadius: 15, }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('./SignInImages/IconBack.png')}
                        />
                    </TouchableOpacity>
                </View>
            
                <View style={{ marginLeft: 15, marginTop: 5 }}>
                    <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 50, }}>
                        Upload Your Photo Profile
                    </Text>
                </View>
         
                <View style={{ marginLeft: 15, marginTop: 20, marginRight: 5 }}>
                    <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'normal', fontStyle: 'normal', lineHeight: 30, }}>
                        This data will be displayed in your account profile for security
                    </Text>
                </View>
        
                <View style={{ marginHorizontal: 20, marginTop: 20, gap: 18 }}>

                
                            <TouchableOpacity 
                                style={styles.containerElement}
                            >
                                <Image
                                    source={require('./SignInImages/Gallery.png')}
                                />
                                <Text style={styles.TextPhotoElement}>From Gallery</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.containerElement}
                            >
                                <Image

                                    source={require('./SignInImages/camera.png')}
                                />
                                <Text style={styles.TextPhotoElement}>Take Photo</Text>
                            </TouchableOpacity>
                  


                </View>
             
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 50, borderRadius: 20, }}
                    onPress={() => navigation.navigate("SetLocation")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 80, }}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        
    )
}

export default UploadPhoto


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
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        marginBottom: 12,
        borderRadius: 15,
        paddingVertical: 22,
        alignItems: 'center',
    }
    ,
    TextPhotoElement: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        paddingVertical: 10
    }
})