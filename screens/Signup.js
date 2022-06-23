import React, { memo, useCallback } from "react";
import { View, Card, Heading, Text, Button, StatusBar } from "native-base";
import { ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

//images
import BgImage from "../assets/signup-bg.svg";

//components
import SignupForm from "../components/SignupForm";
import OAuthLinks from "../components/OAuthLinks";

import { height } from "../constants/dims";
import rnStyles from "../style/rn-styles";
import nbStyles from "../style/nb-styles";

const Signup = () => {
  const navigation = useNavigation();
  const login = useCallback(() => {
    navigation.navigate("login");
  }, []);
  return (
    <KeyboardAwareScrollView
      scrollToOverflowEnabled={true}
      contentContainerStyle={{
        height: height + 100,
        backgroundColor: "#5961E0",
      }}
      // behavior="padding"
    >
      <BgImage />
      <View style={{ ...rnStyles.backgroundOverlay }}>
        <Card
          style={{
            ...rnStyles.formCard(1.1),
            paddingBottom: 100,
          }}
        >
          <Heading>Create Account</Heading>
          <View mt={10}>
            <SignupForm />
            <OAuthLinks />
            <View {...nbStyles.authAlt}>
              <Text>Already joined?</Text>
              <Text style={{ paddingLeft: 9 }}>|</Text>
              <Button {...nbStyles.altButton} onPress={login}>
                Login now
              </Button>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default memo(Signup);
