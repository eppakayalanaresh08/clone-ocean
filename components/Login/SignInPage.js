import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, } from 'react-native'

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { useFonts } from 'expo-font';

import { LinearGradient } from 'expo-linear-gradient';










// const OnBoardingScreenOne = () => {
//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>
//             <View style={styles.imageElementContainer}>
//                 <Image
//                     source={require('./OnBoardingImage/OnboardingImageOne.png')}
//                     style={styles.imageElement}
//                 />
//             </View>
//             <Text
//                 style={styles.headingElement}>
//                 Find your  Comfort Food here
//             </Text>
//             <Text
//                 style={styles.paragraphElement}>
//                 Here You Can find a chef or dish for every taste and color. Enjoy!
//             </Text>
//             <TouchableOpacity
//                 style={styles.nextbuttonElement}
//                 onPress={() => navigation.navigate("OnBoardingScreenTwo")}
//             >
//                 <Text
//                     style={styles.nextbuttonTextElement}>
//                     Next
//                 </Text>
//             </TouchableOpacity>
//         </View>




//     )
// }



const OnboardingScreen1 = ({ onNext }) => {
    return (
<View style={styles.container}>
            <View style={styles.imageElementContainer}>
                <Image
                    source={require('./SignInImages/OnboardingImageOne.png')}
                    style={styles.imageElement}
                />
            </View>
            <Text
                style={styles.headingElement}>
                Find your  Comfort Food here
            </Text>
            <Text
                style={styles.paragraphElement}>
                Here You Can find a chef or dish for every taste and color. Enjoy!
            </Text>
            <TouchableOpacity
                style={styles.nextbuttonElement}
                onPress={onNext}
            >
                <Text
                    style={styles.nextbuttonTextElement}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>










    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Welcome to our app! This is the first onboarding screen.</Text>
    //     <Button title="Next" onPress={onNext} />
    //   </View>
    );
  };
  
  const OnboardingScreen2 = ({ onComplete }) => {
    return (

        <View style={{ flex: 1 }}>
      
        <View style={[{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: responsiveHeight(5), paddingBottom: 20 }]}>
          <View style={{ height: responsiveHeight(50) }}>
            <Image
              source={require('./SignInImages/OnboardingImageTwo.png')}
              style={{ resizeMode: 'contain', width: '100%' }}
            />
          </View>
          <Text
            style={{ color: '#09051C', fontSize: 23, textAlign: 'center', fontWeight: 'bold', fontStyle: 'normal', lineHeight: 30, marginHorizontal: 50, marginTop: 10 }}>
            Food Ninja is Where Your Comfort Food Lives
          </Text>
          <Text
            style={{ color: '#000000', fontSize: 16, textAlign: 'center', fontWeight: 'normal', fontStyle: 'normal', lineHeight: 20, marginHorizontal: 66, marginTop: 20 }}>
            Enjoy a fast and smooth food delivery at your doorstep
          </Text>
          <LinearGradient colors={['#15BE77','#53E88B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }} 
          style={{width:157,height:57,alignSelf: 'center',borderRadius: 20,marginTop: 44,}}
          >
          <TouchableOpacity
       
            onPress={onComplete}
          >
            <Text
              style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', fontStyle: 'normal', lineHeight: 20, paddingVertical: 20, paddingHorizontal: 60, }}>
              Next
            </Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>










    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>This is the second onboarding screen.</Text>
    //     <Button title="Finish" onPress={onComplete} />
    //   </View>
    );
  };
  
  
  
  const WelcomeScreen = () => {
        const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>



        <ScrollView>
           
            <View style={{ flex: 1 }}>
             
                <View >
                    <Image
                        style={{ width: '100%',height:responsiveHeight(40), resizeMode: 'cover', }}
                        source={require('./SignInImages/PatternBg.png')}
                    />
                    <View style={{ alignItems: 'center', position: 'absolute', left: 80, right: 80, marginTop: 50 }}>
                        <Image
                            source={require('./SignInImages/Logo.png')}
                        />
                        <Text style={{ color: '#15BE77', fontSize: 27, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5 }}>
                            Ocean Of Bake
                        </Text>
                        <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 0.5 }}>
                            Deliever Favorite Food
                        </Text>
                    </View>
                </View>
            
                <View>
                    <Text style={{ color: '#09051C', fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', lineHeight: responsiveHeight(5), textAlign: 'center' }}>
                        Login In Your Account
                    </Text>
                </View>

                <View style={{ marginHorizontal: responsiveWidth(5) }}>
                    <TextInput
                        style={{ backgroundColor: '#FFFFFF', paddingHorizontal: responsiveWidth(4), fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 12, color: '#3B3B3B' , borderColor: '#F4F4F4', 
                        borderWidth: 2,     shadowColor: '#F4F4F4', shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },

                      }}
                        placeholder='Email'
                        placeholderTextColor='#3B3B3B'
                       
                    />
                    <TextInput
                        style={{ backgroundColor: '#FFFFFF', paddingHorizontal: responsiveWidth(4), fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, borderRadius: 15, paddingVertical: 12, color: '#3B3B3B' ,shadowColor: '#F4F4F4', borderColor: '#F4F4F4',    borderWidth: 2,   shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        }, }}
                        placeholder='Password'
                        placeholderTextColor='#3B3B3B'
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.7), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 10 }}>
                        Or Continue With
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 20, marginHorizontal: 25, justifyContent: 'space-evenly', }}>
                    <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 ,shadowColor: '#F4F4F4', shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },  borderWidth: 2, borderColor: '#F4F4F4'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 16, }}>
                            <Image
                                source={require('./SignInImages/facebook.png')}
                            />
                            <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal',marginLeft: responsiveWidth(3) }}>
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor:'#FFFFFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 ,  borderWidth: 2, borderColor: '#F4F4F4'}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveHeight(2), }}>
                            <Image
                                source={require('./SignInImages/googleicon.png')}
                            />
                            <Text style={{ color: '#09051C',fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', marginLeft: responsiveWidth(3) }}>
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("VerificationCode")}>
                    <Text style={{ color: '#53E88B', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: responsiveHeight(1.8),  borderBottomColor: '#53E88B', borderBottomWidth: 1, }}>
                        Forgot Your Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 5, borderRadius: 20, }}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text
                        style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', lineHeight: responsiveHeight(2), paddingVertical: responsiveHeight(1.8), paddingHorizontal: responsiveWidth(10) }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignSelf: 'center' }}
                    onPress={() => navigation.navigate("Signup")}
                    >
                    <Text style={{ color: '#53E88B', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: responsiveHeight(1.1), textDecorationLine: 'underline' }}>
                        Don't have an account?
                    </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
  };



const SignInPage = () => {
  const navigation = useNavigation();








  const [onboardingStep, setOnboardingStep] = useState(1);
  const [onboardingComplete, setOnboardingComplete] = useState(false);


  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const onboardingStatus = await AsyncStorage.getItem('onboardingComplete');
        if (onboardingStatus !== null) {
          // Onboarding already completed
          setOnboardingComplete(true);
        } else {
          // Onboarding not completed yet
          // Set initial onboarding step to 1
          setOnboardingStep(1);
        }
      } catch (error) {
        console.error('Error retrieving onboarding status:', error);
      }
    };

    checkOnboardingStatus();
  }, []);

  const handleNextStep = () => {
    setOnboardingStep(step => step + 1);
  };

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('onboardingComplete', 'true');
      setOnboardingComplete(true);
    } catch (error) {
      console.error('Error setting onboarding status:', error);
    }
  };

  if (!onboardingComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {onboardingStep === 1 && <OnboardingScreen1 onNext={handleNextStep} />}
        {onboardingStep === 2 && <OnboardingScreen2 onComplete={handleOnboardingComplete} />}
      </View>
    );
  }












//   let [fontsLoaded]=useFonts({
//     'Pacifico-Regular':require('./SignInImages/Pacifico-Regular.ttf')
//   })

//   if(!fontsLoaded){
//     return null
//   }

  return <WelcomeScreen />;


//   return (
//     <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>



//         <ScrollView>
           
//             <View style={{ flex: 1 }}>
             
//                 <View >
//                     <Image
//                         style={{ width: '100%',height:responsiveHeight(40), resizeMode: 'cover', }}
//                         source={require('./SignInImages/PatternBg.png')}
//                     />
//                     <View style={{ alignItems: 'center', position: 'absolute', left: 80, right: 80, marginTop: 50 }}>
//                         <Image
//                             source={require('./SignInImages/Logo.png')}
//                         />
//                         <Text style={{ color: '#15BE77', fontSize: 27, fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5 }}>
//                             Ocean Of Bake
//                         </Text>
//                         <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'italic', letterSpacing: 0.5 }}>
//                             Deliever Favorite Food
//                         </Text>
//                     </View>
//                 </View>
            
//                 <View>
//                     <Text style={{ color: '#09051C', fontSize: responsiveFontSize(2),fontFamily:'Pacifico-Regular', fontWeight: 'bold', fontStyle: 'normal', lineHeight: responsiveHeight(5), textAlign: 'center' }}>
//                         Login In Your Account
//                     </Text>
//                 </View>

//                 <View style={{ marginHorizontal: responsiveWidth(5) }}>
//                     <TextInput
//                         style={{ backgroundColor: '#FFFFFF', paddingHorizontal: responsiveWidth(4), fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, marginBottom: 12, borderRadius: 15, paddingVertical: 12, color: '#3B3B3B' , borderColor: '#F4F4F4', 
//                         borderWidth: 2,     shadowColor: '#F4F4F4', shadowOpacity: 0.25,
//                         shadowRadius: 3.84,
//                         elevation: 5,
//                         shadowOffset: {
//                           width: 0,
//                           height: 2,
//                         },

//                       }}
//                         placeholder='Email'
//                         placeholderTextColor='#3B3B3B'
                       
//                     />
//                     <TextInput
//                         style={{ backgroundColor: '#FFFFFF', paddingHorizontal: responsiveWidth(4), fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', letterSpacing: 0.5, borderRadius: 15, paddingVertical: 12, color: '#3B3B3B' ,shadowColor: '#F4F4F4', borderColor: '#F4F4F4',    borderWidth: 2,   shadowOpacity: 0.25,
//                         shadowRadius: 3.84,
//                         elevation: 5,
//                         shadowOffset: {
//                           width: 0,
//                           height: 2,
//                         }, }}
//                         placeholder='Password'
//                         placeholderTextColor='#3B3B3B'
//                         secureTextEntry
//                     />
//                 </View>
//                 <View>
//                     <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.7), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: 10 }}>
//                         Or Continue With
//                     </Text>
//                 </View>
//                 <View style={{ flexDirection: 'row', gap: 20, marginHorizontal: 25, justifyContent: 'space-evenly', }}>
//                     <TouchableOpacity style={{ backgroundColor: '#FFFFFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 ,shadowColor: '#F4F4F4', shadowOpacity: 0.25,
//                         shadowRadius: 3.84,
//                         elevation: 5,
//                         shadowOffset: {
//                           width: 0,
//                           height: 2,
//                         },  borderWidth: 2, borderColor: '#F4F4F4'}}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, paddingVertical: 16, }}>
//                             <Image
//                                 source={require('./SignInImages/facebook.png')}
//                             />
//                             <Text style={{ color: '#09051C', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal',marginLeft: responsiveWidth(3) }}>
//                                 Facebook
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{ backgroundColor:'#FFFFFF', borderRadius: 15, justifyContent: 'center', alignItems: 'center', flex: 1 ,  borderWidth: 2, borderColor: '#F4F4F4'}}>
//                         <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveHeight(2), }}>
//                             <Image
//                                 source={require('./SignInImages/googleicon.png')}
//                             />
//                             <Text style={{ color: '#09051C',fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', marginLeft: responsiveWidth(3) }}>
//                                 Google
//                             </Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//                 <TouchableOpacity
//                     style={{ alignSelf: 'center' }}
//                     onPress={() => navigation.navigate("VerificationCode")}>
//                     <Text style={{ color: '#53E88B', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: responsiveHeight(1.8),  borderBottomColor: '#53E88B', borderBottomWidth: 1, }}>
//                         Forgot Your Password?
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={{ backgroundColor: '#53E88B', alignSelf: 'center', marginTop: 5, borderRadius: 20, }}
//                     onPress={() => navigation.navigate("HomePage")}
//                 >
//                     <Text
//                         style={{ color: '#fff', fontSize: responsiveFontSize(2), fontWeight: 'bold', fontStyle: 'normal', lineHeight: responsiveHeight(2), paddingVertical: responsiveHeight(1.8), paddingHorizontal: responsiveWidth(10) }}>
//                         Login
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     style={{ alignSelf: 'center' }}
//                     onPress={() => navigation.navigate("Signup")}
//                     >
//                     <Text style={{ color: '#53E88B', fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontStyle: 'normal', textAlign: 'center', marginVertical: responsiveHeight(1.1), textDecorationLine: 'underline' }}>
//                         Don't have an account?
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//             </ScrollView>
//         </View>
//   )
}

export default SignInPage




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: responsiveHeight(10),
        paddingBottom: responsiveHeight(20)
    },
    imageElementContainer: {
        height: responsiveHeight(50)

    },
    imageElement: {
        resizeMode: 'contain',
        width: '100%'
    },
    headingElement: {
        color: '#09051C',
        width: 220,
        fontSize: 21,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 30,
        marginHorizontal: 95,
        marginTop: 38
    },
    paragraphElement: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 20,
        marginHorizontal: 66,
        marginTop: 20
    },
    nextbuttonElement: {
        backgroundColor: '#D9D9D9',
        width: 157,
        height: 50,
        alignSelf: 'center',
        marginTop: 44,
        marginBottom: 200,
        borderRadius: 20,
    },
    nextbuttonTextElement: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 20,
        paddingVertical: 14,
        paddingHorizontal: 60,
    }

});
