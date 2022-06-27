import React from "react";
import { TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Avatar, Box, Center, Heading, HStack, Stack, Text } from "native-base";

import imageGraphic from "../assets/card-graphic.png";
import MeterAvatarIcon from "../assets/meter-avatar.svg";

export const MeterCard = ({
  AddMeterComponent,
  name,
  address,
  isSelected,
  meter_no,
  onPress,
}) => {
  return (
    <Stack flexDir={"row"}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          alt="card-graphic"
          source={imageGraphic}
          style={[
            styles.container,
            {
              backgroundColor: isSelected ? "#1c1c1c" : "#5961e0",
            },
          ]}
        >
          <HStack justifyContent={"space-between"}>
            <Avatar width={28} height={28} bg={"#fff"}>
              <MeterAvatarIcon width={24} height={24} />
            </Avatar>
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              style={{ width: 28, height: 28 }}
              shadow={3}
              borderWidth={3}
              borderColor={"#fafafa"}
              bg={"transparent"}
              rounded="full"
            >
              {isSelected && (
                <Center justifyContent={"center"} alignItems={"center"}>
                  <Box
                    style={{ width: 14, height: 14 }}
                    background={"#fff"}
                    rounded={"full"}
                    shadow={7}
                  />
                </Center>
              )}
            </Box>
          </HStack>
          <Box>
            <Heading color={"white"} size={"md"} fontWeight={700}>
              {name}
            </Heading>
            <Text color={"white"} fontWeight={300}>
              {address}
            </Text>
          </Box>
          <Heading color={"white"} size={"xl"} fontWeight={500}>
            {meter_no}
          </Heading>
        </ImageBackground>
      </TouchableOpacity>
      {AddMeterComponent && AddMeterComponent}
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 12,
    width: 237,
    height: 164,
    resizeMode: "contain",
    borderRadius: 20,
    marginRight: 4,
    shadowColor: "#ccc",
    shadowOffset: 4,
    shadowRadius: 12,
  },
});
