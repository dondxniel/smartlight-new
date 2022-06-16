import React from "react";
import { View } from "native-base";
import { LogBox } from "react-native";

import NavigationRoot from "./navigation";
//ignore warnings from popping
const warnings = [
  "ViewPropTypes will be removed",
  "React.createElement: type is invalid -- ",
];
LogBox.ignoreLogs(warnings.map((warning) => warning));

const App = () => {
  return (
    <View flex={1}>
      <NavigationRoot />
    </View>
  );
};

export default App;
