import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import RootStack, {Stack} from './stacks';
import OnboardingScreen from '../screens/Onboarding'
import LoginScreen from '../screens/Login'
import SignupScreen from '../screens/Signup'
import VerifyPhoneNumberScreen from '../screens/VerifyPhoneNumber'

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
                        headerShown: false
                    }}
                    name="signup"
                >
                    {props => <SignupScreen {...props} />}
                </Stack.Screen>
                {/* 4 */}
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="verifyphonenumber"
                >
                    {props => <VerifyPhoneNumberScreen {...props} />}
                </Stack.Screen>
                {/* 2 */}
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="login"
                >
                    {props => <LoginScreen {...props} />}
                </Stack.Screen>
                
            </RootStack>
        </NavigationContainer>
    )
}

export default Root;
