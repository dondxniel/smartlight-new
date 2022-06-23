import React, { memo, useCallback } from "react";
import { View, Card, Heading, Text, Button, StatusBar } from "native-base";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//images
import BgImage from "../assets/login-bg.svg";

import { height } from "../constants/dims";
import LoginForm from "../components/LoginForm";
import OAuthLinks from "../components/OAuthLinks";
import rnStyles from "../style/rn-styles";
import nbStyles from "../style/nb-styles";

const Login = () => {
  const navigation = useNavigation();
  const signup = useCallback(() => {
    navigation.navigate("signup");
  }, []);
  return (
    <KeyboardAwareScrollView
      scrollToOverflowEnabled={true}
      contentContainerStyle={{
        height: height + 100,
        backgroundColor: "#5961E0",
      }}
    >
      <StatusBar translucent backgroundColor={"transparent"} />
      <BgImage />
      <View style={{ ...rnStyles.backgroundOverlay }}>
        <View flex={1} />
        <Card style={{ ...rnStyles.formCard(1.22) }}>
          <Heading>Welcome back!</Heading>
          <View mt={10} paddingBottom={120}>
            <LoginForm />
            <OAuthLinks />
            <View {...nbStyles.authAlt}>
              <Text>Are you new?</Text>
              <Text style={{ paddingLeft: 9 }}>|</Text>
              <Button {...nbStyles.altButton} onPress={signup}>
                Sign up now
              </Button>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default memo(Login);
