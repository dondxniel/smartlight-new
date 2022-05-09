import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

const RootStack = ({children}, props) => {
    return <Stack.Navigator {...props}>
        {children}
    </Stack.Navigator>
}

export default RootStack;
