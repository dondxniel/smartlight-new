import React from "react";
import { Center } from "native-base";
// import EIcon from "react-native-vector-icons/Entypo";
// import AIcon from "react-native-vector-icons/AntDesign";
// import FeIcon from "react-native-vector-icons/Feather";
// import FaIcon from "react-native-vector-icons/FontAwesome";
// import FIcon from "react-native-vector-icons/Fontisto";
// import FoIcon from "react-native-vector-icons/Foundation";
// import IoIcon from "react-native-vector-icons/Ionicons";
// import OIcon from "react-native-vector-icons/Octicons";
// import MIcon from "react-native-vector-icons/MaterialIcons";
// import SlIcon from "react-native-vector-icons/SimpleLineIcons";

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

//icons
import SVGIconHome from "../../assets/tab-icons/home-active.svg";
import SVGIconHomeAlt from "../../assets/tab-icons/home-inactive.svg";
import SVGIconTransact from "../../assets/tab-icons/transact-active.svg";
import SVGIconTransactAlt from "../../assets/tab-icons/transact-inactive.svg";
import SVGIconNotify from "../../assets/tab-icons/notify-active.svg";
import SVGIconNotifyAlt from "../../assets/tab-icons/notify-inactive.svg";
import SVGIconProfile from "../../assets/tab-icons/profile-active.svg";
import SVGIconProfileAlt from "../../assets/tab-icons/profile-inactive.svg";

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
              <SVGIconHome width={20} height={19} />
              {/* <EIcon color="blue" name="home" size={20} /> */}
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <SVGIconHomeAlt width={20} height={19} />
            </Center>
          ),
        }}
        children={(props) => <DashboardScreen {...props} />}
      />
      <BottomTab.Screen
        name="transaction"
        options={{
          headerShown: true,
          activeTab: (
            <Center mt={25}>
              <SVGIconTransact width={20} height={19} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <SVGIconTransactAlt width={20} height={19} />
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
              <SVGIconNotify width={21} height={20} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <SVGIconNotifyAlt width={21} height={20} />
            </Center>
          ),
        }}
        children={(props) => <NotificationScreen {...props} />}
      />
      <BottomTab.Screen
        options={{
          activeTab: (
            <Center mt={25}>
              <SVGIconProfile width={20} height={19} />
            </Center>
          ),
          inActiveTab: (
            <Center mt={25}>
              <SVGIconProfileAlt width={20} height={19} />
            </Center>
          ),
        }}
        name="profile"
        children={(props) => <ProfileScreen {...props} />}
      />
    </BottomTab.Navigator>
  );
}
