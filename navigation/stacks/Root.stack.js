import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BoardingStack from "./Boarding.stack";
import DashboardStack from "./Dashboard.stack";

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
        children={(props) => <DashboardStack {...props} />}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
