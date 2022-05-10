import React from "react";
import { Center } from "native-base";
import EIcon from "react-native-vector-icons/Entypo";
import AIcon from "react-native-vector-icons/AntDesign";
import FeIcon from "react-native-vector-icons/Feather";
import FaIcon from "react-native-vector-icons/FontAwesome";
import FIcon from "react-native-vector-icons/Fontisto";
import FoIcon from "react-native-vector-icons/Foundation";
import IoIcon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import MIcon from "react-native-vector-icons/MaterialIcons";
import SlIcon from "react-native-vector-icons/SimpleLineIcons";

// constant
import { width, height } from "../../constants/dims";

// custom navigation
import createCustomTabNavigator from "./createCustomTabNavigator";

//screens
import DashboardScreen from "../../screens/Dashboard";
import NotificationScreen from "../../screens/Notification";
import TransactionScreen from "../../screens/Transaction";
import ProfileScreen from "../../screens/Profile";
import MeterScreen from "../../screens/Meter";
import { MeterTabIcon } from "../../components/TabIcon";

//components

const BottomTab = createCustomTabNavigator();

export default function () {
  return (
    <BottomTab.Navigator
      tabBarStyle={{
        width,
        height: 70,
      }}
    >
      <BottomTab.Screen
        name="dashboard"
        options={{
          activeTab: (
            <Center mt={25}>
              <EIcon color="blue" name="home" size={20} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <AIcon name="home" size={20} />
            </Center>
          ),
        }}
        children={(props) => <DashboardScreen {...props} />}
      />
      <BottomTab.Screen
        name="transaction"
        options={{
          activeTab: (
            <Center mt={25}>
              <EIcon color="blue" name="home" size={20} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <AIcon name="home" size={20} />
            </Center>
          ),
        }}
        children={(props) => <TransactionScreen {...props} />}
      />
      <BottomTab.Screen
        options={{
          activeTab: <MeterTabIcon />,
          inActiveTab: <MeterTabIcon />,
        }}
        name="meter"
        children={(props) => <MeterScreen {...props} />}
      />
      <BottomTab.Screen
        name="notification"
        options={{
          activeTab: (
            <Center mt={25}>
              <IoIcon color="blue" name="notifications" size={21} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <FIcon name="bell" size={20} />
            </Center>
          ),
        }}
        children={(props) => <NotificationScreen {...props} />}
      />
      <BottomTab.Screen
        options={{
          activeTab: (
            <Center mt={25}>
              <IoIcon color="blue" name="person" size={20} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <FeIcon name="user" size={20} />
            </Center>
          ),
        }}
        name="profile"
        children={(props) => <ProfileScreen {...props} />}
      />
    </BottomTab.Navigator>
  );
}
