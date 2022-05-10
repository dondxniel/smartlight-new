import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//navigations
import BoardingStack from "./Boarding.stack";

//custom navigations
import RootTab from "../customBottomTab/RootTab";

export const Stack = createNativeStackNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="_onboarding"
        children={(props) => <BoardingStack {...props} />}
      />
      <Stack.Screen
        name="_dashboard"
        children={(props) => <RootTab {...props} />}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
