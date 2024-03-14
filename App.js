
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreenOne from './components/OnBoarding/OnBoardingScreenOne';
import OnBoardingScreenTwo from './components/OnBoarding/OnBoardingScreenTwo';
import SignInPage from './components/Login/SignInPage';
import SignUpPage from './components/Login/SignUpPage';
import SignUpProcess from './components/Login/SignUpProcess';
import PaymentMethod from './components/Login/PaymentMethod';
import UploadPhoto from './components/Login/UploadPhoto';
import SignUpSuccessNotification from './components/Login/SignUpSuccessNotification';
import SetLocation from './components/Login/SetLocation';
import ViaMethodForgotPassword from './components/Login/ViaMethodForgotPassword';
import NewPassword from './components/Login/NewPassword';
import PasswordResetSuccessful from './components/Login/PasswordResetSuccessful';
import VerificationCode from './components/Login/VerificationCode';
import Notification from './components/Home/Notification';
import Profile from './components/Home/Profile';
import UserPaymentPage from './components/Home/UserPaymentPage';
import EditLocation from './components/Home/EditLocation';
import EditPaymentpage from './components/Home/EditPaymentpage';
import FoodItemDetailMenu from './components/Home/FoodItemDetailMenu';
import RestaurentDetailMenu from './components/Home/RestaurentDetailMenu';
import FinishOrder from './components/Home/FinishOrder';
import RateFood from './components/Home/RateFood';
import RateRestaurent from './components/Home/RateRestaurent';
import OrderDetails from './components/Home/OrderDetails';
import Filter from './components/Home/Filter';
import HomePage from './components/Home/HomePage';
import ExploreRestaurant from './components/Home/ExploreRestaurant';
import Message from './components/Home/Message';
import ChatDetails from './components/Home/ChatDetails';
import CallForUser from './components/Home/CallForUser';
import YourOrder from './components/Home/YourOrder';
import ExploreFoodMenu from './components/Home/ExploreFoodMenu';
import SetLocationUser from './components/Home/SetLocationUser';
import TrackOrder from './components/Home/TrackOrder';
import Voucher from './components/Home/Voucher';
import FilterFood from './components/Home/FilterFood';
import FilterRestaurant from './components/Home/FilterRestaurant';



export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="OnBoardingScreenOne" component={OnBoardingScreenOne} options={{ headerShown: false }} />
      <Stack.Screen name="OnBoardingScreenTwo" component={OnBoardingScreenTwo} options={{ headerShown: false }}/>

      <Stack.Screen name="Login" component={SignInPage} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} options={{ headerShown: false }} />

      <Stack.Screen name="ForgotPassword" component={ViaMethodForgotPassword} options={{ headerShown: false }} />
      <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
      <Stack.Screen name="PasswordResetSuccessful" component={PasswordResetSuccessful} options={{ headerShown: false }} />
      <Stack.Screen name="SignupProcess" component={SignUpProcess} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
      <Stack.Screen name="SignUpSuccess" component={SignUpSuccessNotification} options={{ headerShown: false }} />
      <Stack.Screen name="SetLocation" component={SetLocation} options={{ headerShown: false }} />

      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />

      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="UserPayment" component={UserPaymentPage} options={{ headerShown: false }} />
      <Stack.Screen name="EditLocation" component={EditLocation} options={{ headerShown: false }} />
      <Stack.Screen name="EditPaymentpage" component={EditPaymentpage} options={{ headerShown: false }} />
      <Stack.Screen name="FoodItemDetailMenu" component={FoodItemDetailMenu} options={{ headerShown: false }} />
      <Stack.Screen name="RestaurentDetailMenu" component={RestaurentDetailMenu} options={{ headerShown: false }} />
      <Stack.Screen name="FinishOrder" component={FinishOrder} options={{ headerShown: false }} />
      <Stack.Screen name="RateFood" component={RateFood} options={{ headerShown: false }} />

      <Stack.Screen name="RateRestaurent" component={RateRestaurent} options={{ headerShown: false }} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />
      <Stack.Screen name="ExploreRestaurant" component={ExploreRestaurant} options={{ headerShown: false }} />

      <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
      <Stack.Screen name="ChatDetails" component={ChatDetails} options={{ headerShown: false }} />
      <Stack.Screen name="CallForUser" component={CallForUser} options={{ headerShown: false }} />
      <Stack.Screen name="YourOrder" component={YourOrder} options={{ headerShown: false }} />
      <Stack.Screen name="UserPaymentPage" component={UserPaymentPage} options={{ headerShown: false }} />

      <Stack.Screen name="ExploreFoodMenu" component={ExploreFoodMenu} options={{ headerShown: false }} />
      <Stack.Screen name="SetLocationUser" component={SetLocationUser} options={{ headerShown: false }} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} options={{ headerShown: false }} />
      <Stack.Screen name="Voucher" component={Voucher} options={{ headerShown: false }} />
      <Stack.Screen name="FilterFood" component={FilterFood} options={{ headerShown: false }} />
      <Stack.Screen name="FilterRestaurant" component={FilterRestaurant} options={{ headerShown: false }} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}
