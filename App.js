import React, { useEffect } from "react";
import { LogBox } from "react-native";
import RNBootSplash from "react-native-bootsplash";
import { View } from "native-base";

import NavigationRoot from "./navigation";
//ignore warnings from popping
const warnings = [
  "ViewPropTypes will be removed",
  "React.createElement: type is invalid -- ",
];
LogBox.ignoreLogs(warnings.map((warning) => warning));

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);
  return (
    <View flex={1}>
      <NavigationRoot />
    </View>
  );
};

export default App;
