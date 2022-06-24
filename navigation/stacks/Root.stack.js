import React, { memo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

//navigations
import BoardingStack from "./Boarding.stack";

//custom navigations
import RootTab from "../customBottomTab/RootTab";

//screen
import MeterInformation from "../../screens/MeterInformation";
import EditProfile from "../../screens/EditProfile";
import ChangePassword from "../../screens/ChangePassword";
import Support from "../../screens/Support";
import About from "../../screens/About";

export const Stack = createNativeStackNavigator();

const RootStack = (props) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
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
      <Stack.Screen
        name="edit-profile"
        children={(props) => <EditProfile {...props} />}
      />
      <Stack.Screen
        name="change-password"
        children={(props) => <ChangePassword {...props} />}
      />
      <Stack.Screen
        name="support"
        children={(props) => <Support {...props} />}
      />
      <Stack.Screen name="about" children={(props) => <About {...props} />} />
    </Stack.Navigator>
  );
};

export default memo(RootStack);
