import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  createNavigatorFactory,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from "@react-navigation/native";
import { Center, Pressable, Text, View } from "native-base";

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <View style={[{ flex: 1 }, contentStyle]}>
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                { display: i === state.index ? "flex" : "none" },
              ]}
            >
              {descriptors[route.key].render()}
            </View>
          );
        })}
      </View>
      <ImageBackground
        source={require("../../assets/Surfacetabsurface.png")}
        style={[
          {
            flexDirection: "row",
            backgroundColor: "transparent",
            shadowOpacity: 0,
            shadowColor: "transparent",
            backfaceVisibility: "hidden",
          },
          tabBarStyle,
        ]}
      >
        {state.routes.map((route, idx) => {
          const isFocused = state.index === idx;
          const color = isFocused ? "primary.100" : "gray.400";
          return (
            <Pressable
              key={route.key}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!event.defaultPrevented) {
                  navigation.dispatch({
                    ...TabActions.jumpTo(route.name),
                    target: state.key,
                  });
                }
              }}
              style={{ flex: 1 }}
            >
              {isFocused
                ? descriptors[route.key].options.activeTab || (
                    <Center>
                      <Text color={color}>{route.name} </Text>
                    </Center>
                  )
                : descriptors[route.key].options.inActiveTab || (
                    <Center>
                      <Text color={color}>{route.name}</Text>
                    </Center>
                  )}
            </Pressable>
          );
        })}
      </ImageBackground>
    </NavigationContent>
  );
}

const createCustomTabNavigator = createNavigatorFactory(TabNavigator);

export default createCustomTabNavigator;
