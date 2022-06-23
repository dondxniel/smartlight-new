import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";

//navigators
import RootStack from "./stacks/Root.stack";

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default memo(Root);
