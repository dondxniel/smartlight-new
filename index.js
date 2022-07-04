/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { NativeBaseProvider } from "native-base";
import theme from "./native-base-theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/store";

const Main = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor} />
			<NativeBaseProvider theme={theme}>
				<App />
			</NativeBaseProvider>
		</Provider>
	);
};

AppRegistry.registerComponent(appName, () => Main);
