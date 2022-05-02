import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

//navigators
import RootStack, { Stack } from './stacks';

//screens
import OnboardingScreen from '../screens/Onboarding'
import LoginScreen from '../screens/Login'
import SignupScreen from '../screens/Signup'
import VerifyPhoneNumberScreen from '../screens/VerifyPhoneNumber'
import ForgotPassword from '../screens/ForgotPassword'
import Otp from '../screens/Otp'


const Root = () => {
  return (
    <NavigationContainer>
      <RootStack>
        {/* 1 */}
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="onboarding"
        >
          {props => <OnboardingScreen {...props} />}
        </Stack.Screen>
        {/* 3 */}
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_bottom'
          }}
          name="signup"
        >
          {props => <SignupScreen {...props} />}
        </Stack.Screen>
        {/* 4 */}
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_left'
          }}
          name="verifyphonenumber"
        >
          {props => <VerifyPhoneNumberScreen {...props} />}
        </Stack.Screen>
        {/* 2 */}
        <Stack.Screen
          options={{
            headerShown: false,
            animation: 'slide_from_bottom'
          }}
          name="login"
        >
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false, animation: 'slide_from_right' }} name='forgot_password'>
          {props => <ForgotPassword {...props} />}
        </Stack.Screen>
        <Stack.Screen options={{ headerShown: false, animation: 'slide_from_right' }} name='otp'>
          {props => <Otp {...props} />}
        </Stack.Screen>


      </RootStack>
    </NavigationContainer>
  )
}

export default Root;
