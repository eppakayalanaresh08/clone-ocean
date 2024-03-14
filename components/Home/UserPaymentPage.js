
import { Image ,StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'

import React from 'react'
import { useNavigation } from '@react-navigation/native';

const UserPaymentPage = () => {
  const navigation = useNavigation();

  return (


    <View style={{ flex: 1, backgroundColor: '#FEFEFF' }}>


<ScrollView>
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
        <View style={{ marginLeft: 25, marginTop: 5 }}>
          <Text style={{ color: '#09051C', fontSize: 28, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 40, }}>
            Confirm Order
          </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20, gap: 18 }}>

          <View
            style={styles.containerElement}
          >
            <View style={styles.OrderElementContainer}>
              <Text>Deliver To</Text>
              <TouchableOpacity onPress={() => navigation.navigate("EditLocation")}>
                <Text style={styles.editbutton}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.OrderInsideContainer}>
              <Image
                source={require('./HomeAssets/LocationIcon.png')}
              />
              <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: 'bold', marginRight: 20 }}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
            </View>

          </View>


          <View
            style={styles.containerElement}
          >
            <View style={styles.OrderElementContainer}>
              <Text>Payment Method</Text>
              <TouchableOpacity onPress={() => navigation.navigate("EditPaymentpage")}>
                <Text style={styles.editbutton}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.OrderInsideContainer}>
              <Image
                source={require('./HomeAssets/paypalLogo.png')}
              />
              <Text style={{ paddingLeft: 10, fontSize: 15, fontWeight: '400', marginRight: 20 }}>2121 6352 8465 ****</Text>
            </View>

          </View>








         

        </View>
        </ScrollView>
        
        <View   style={{ backgroundColor: '#15BE77',width:'100%', borderRadius: 5 ,paddingHorizontal:30,paddingTop:10,borderTopLeftRadius:20,borderTopRightRadius:20,paddingBottom:20,position: 'fixed'}}  
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
                    <TouchableOpacity style={styles.orderButton} onPress={()=>navigation.navigate('TrackOrder')}>
                        <Text style={{color:'#15BE77',fontWeight:'bold'}}>Place My Order</Text>
                    </TouchableOpacity>
         </View>


    </View>

  )
}

export default UserPaymentPage

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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.5,
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
    paddingVertical: 10,
    marginTop:10
  },
  editbutton: {
    color: '#15BE77',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textName:{
    color:'#FEFEFF',
    fontWeight:'bold',
    fontSize:17,

},
textContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginVertical:3
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
})