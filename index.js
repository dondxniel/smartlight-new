/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NativeBaseProvider} from 'native-base';
import theme from './native-base-theme'

const Main = () => {
    return (
        <NativeBaseProvider theme={theme}>
            <App />
        </NativeBaseProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
