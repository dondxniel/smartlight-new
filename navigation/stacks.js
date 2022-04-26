import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

const RootStack = ({children}) => {
    return <Stack.Navigator>
        {children}
    </Stack.Navigator>
}

export default RootStack;