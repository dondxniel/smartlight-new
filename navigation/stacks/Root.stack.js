import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//navigations
import BoardingStack from "./Boarding.stack";

//custom navigations
import RootTab from "../customBottomTab/RootTab";

//screen
import MeterInformation from "../../screens/MeterInformation";

export const Stack = createNativeStackNavigator();

const RootStack = (props) => {
  const navigation = useNavigation();
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
      <Stack.Screen
        name="meter-info"
        children={(props) => <MeterInformation {...props} />}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
