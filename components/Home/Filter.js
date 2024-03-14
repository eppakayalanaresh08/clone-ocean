import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const Filter = () => {
  const navigation = useNavigation();


  const lessthenten='>10 Km'
  const gretherthenten='<10 Km'
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
      <View style={{flex:1,marginHorizontal:5}}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameheadingElement}>Find Your Favorite Food</Text>
  <TouchableOpacity  onPress={() => navigation.navigate("Notification")}
>
          <Image 
            source={require('./HomeAssets/IconNotifiaction.png')}
          />
          </TouchableOpacity>

        </View>
        <View style={styles.inputContainer}>
          <Image style={{ marginLeft: responsiveWidth(2) }}
            source={require('./HomeAssets/IconSearch.png')}
          />
          <TextInput
            style={styles.inputContainer}
            placeholder='What do you want to order?'
            placeholderTextColor='#3B3B3B'

          />

        </View>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginHorizontal:10}}>Type</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterRestaurant')}>
            
            <Text style={styles.nameElement}>Restaurant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('ExploreFoodMenu')}>
               <Text style={styles.nameElement}>Menu</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginHorizontal:10}}>Location</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterRestaurant')}>
            
            <Text style={styles.nameElement}>1km</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterRestaurant')}>
               <Text style={styles.nameElement}>{lessthenten}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterRestaurant')}>
               <Text style={styles.nameElement}>{gretherthenten} </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginHorizontal:10}}>Food</Text>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterFood')}>
            
            <Text style={styles.nameElement}>Cake</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterFood')}>
               <Text style={styles.nameElement}>Soup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterFood')}>
               <Text style={styles.nameElement}>Main Course </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterFood')}>
               <Text style={styles.nameElement}>Appetizer </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonElement} onPress={()=>navigation.navigate('FilterFood')}>
               <Text style={styles.nameElement}>Dessert </Text>
          </TouchableOpacity>
        </View>
       
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonbg}>
          <Text style={{color:'#FFFFFF',fontWeight:'bold'}}>Search</Text>
        </TouchableOpacity>
     
    </SafeAreaView>
  )
}

export default Filter

const styles = StyleSheet.create({
  nameContainer: {

    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  nameheadingElement: {
    fontSize: 25,
    color: '#09051C',
    fontWeight: 'bold'

  },
  inputContainer: {
    backgroundColor: '#FDEDDB',
    paddingVertical: responsiveHeight(1),
    borderRadius: 15,
    marginHorizontal: responsiveWidth(3),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    

  },
  buttonElement:{
      backgroundColor: '#FDEDDB',
      marginHorizontal:5,
      paddingVertical:15,
      paddingHorizontal:15,
      marginVertical:15,
      borderRadius:10
      

  },
  nameElement:{
    color:'#DA6317',
    fontWeight:'bold'
  },
  buttonbg:{
    backgroundColor:'#15BE77',
    justifyContent:'center',
    alignItems:'center',
    position: 'fixed',

    marginHorizontal:responsiveWidth(3),
    paddingVertical:15,
    borderRadius:20,
    marginBottom:responsiveHeight(5)
  },
  

})