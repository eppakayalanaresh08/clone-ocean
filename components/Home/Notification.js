import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Notification = () => {
    const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
 
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
                Notification
            </Text>
        </View>
       
        <View style={{ marginHorizontal: 20, marginTop: 20, gap:18 }}>
            <TouchableOpacity
                style={styles.containerElement}
            >
                <View>
                <Image
                    source={require('./HomeAssets/checkedIcon.png')}
                />
                </View>
                <View style={styles.containernameText}>
                <Text style={styles.textNameOrder}>Your Order has been taken by the driver </Text>
                <Text>Recently</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerElement}
            >
                <Image
              
                    source={require('./HomeAssets/moneyIcon.png')}
                />
                 <View style={styles.containernameText}>
                <Text style={styles.textNameOrder}>Topup for $100 was successful </Text>
                <Text>10.00 Am</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.containerElement}
            >
                <Image

                    source={require('./HomeAssets/ordercanceled.png')}
                />
                 <View style={styles.containernameText}>
                <Text style={styles.textNameOrder}>Your order has been canceled </Text>
                <Text>22 Juny 2021</Text>
                </View>
            </TouchableOpacity>
        </View>
        {/* Next btn */}
        
    </View>
</View>
  )
}

export default Notification

const styles = StyleSheet.create({
    containerElement:{
        flexDirection:'row',
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
      },
      textNameOrder:{
        fontWeight:'bold',
        fontSize:14,
        flexWrap:'wrap',
      
      }
      ,containernameText:{
        marginLeft:8
      },
})