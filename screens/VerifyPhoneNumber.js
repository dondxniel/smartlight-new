import React, { memo } from "react";
import { View, Card, Heading, Text, Button } from "native-base";
import { ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { height } from "../constants/dims";
import VerifyPhoneNumberForm from "../components/VerifyPhoneNumberForm";

const VerifyPhoneNumber = ({ navigation }) => {
  const login = () => {
    navigation.navigate("login");
    console.log("testing component rerender...");
  };
  return (
    <KeyboardAwareScrollView>
      <View bg="primary.100" h={height}>
        <ImageBackground
          source={require("../assets/bg3.png")}
          style={{
            height: height / 2,
            backgroundPosition: "top",
            backgroundSize: "50%",
            zIndex: -2,
            position: "relative",
            top: 0,
          }}
        />
        <View
          style={{
            zIndex: 1,
            position: "absolute",
            left: 0,
            right: 0,
          }}
        >
          <Card
            height="auto"
            style={{
              backgroundColor: "#fff",
              marginTop: height / 2.2,
              marginLeft: 7,
              marginRight: 7,
              borderRadius: 20,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              paddingTop: 30,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            <Heading>Verify Phone Number</Heading>
            <View mt={10}>
              <VerifyPhoneNumberForm />
            </View>
          </Card>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default memo(VerifyPhoneNumber);
