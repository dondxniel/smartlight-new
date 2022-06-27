import React, { memo } from "react";
import { Avatar, HStack, Stack, Text, VStack } from "native-base";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import imageGraphic from "../assets/card-graphic.png";

const MeterInfo = ({
  avatar,
  horizontal,
  meterInfo,
  meterName,
  meterNo,
  meterValue,
  onPress,
}) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <ImageBackground
        alt={"meter card"}
        source={imageGraphic}
        style={[styles.container, { height: horizontal ? 145 : 160 }]}
      >
        <Stack
          space={"md"}
          alignItems={horizontal && "center"}
          direction={horizontal && "row"}
        >
          {avatar && (
            <Avatar w={30} h={30} bgColor={"#ffffff"} shadow={2}>
              {avatar}
            </Avatar>
          )}
          <VStack>
            <Text>{meterName}</Text>
            <HStack>
              <Text fontWeight={"bold"}>{meterNo} </Text>
              <Text fontFamily={"GTWalsheim Pro Medium"}>{meterInfo}</Text>
            </HStack>
          </VStack>
        </Stack>

        <HStack
          mt={horizontal && 7}
          ml={horizontal && 10}
          alignItems={"center"}
        >
          <Text fontSize={40} fontWeight={"bold"} color={"#5961E0"}>
            {meterValue}
          </Text>
          <Text fontSize={30} mt={2}>
            {" "}
            kwh
          </Text>
        </HStack>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#fafafa",
    borderRadius: 20,
    flex: 1,
  },
});
export default memo(MeterInfo);
