import React from "react";
import {
  Avatar,
  Center,
  HStack,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";

const MeterCard = ({
  avatar,
  horizontal,
  meterInfo,
  meterName,
  meterNo,
  meterValue,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      p={7}
      background={"#fff"}
      rounded={"2xl"}
      flex={0.9}
    >
      <Stack
        space={"md"}

        direction={horizontal ? "row" : "column"}
      >
        {avatar && (
          <Avatar bgColor={"#ffffff"} shadow={2}>
            {avatar}
          </Avatar>
        )}
        <VStack>
          <Text>{meterName}</Text>
          <HStack>
            <Text fontWeight={"bold"}>{meterNo} </Text>
            <Text>{meterInfo}</Text>
          </HStack>
        </VStack>
      </Stack>
      <Center>
        <HStack>
          <Text fontSize={50} fontWeight={"bold"} color={"#5961E0"}>
            {meterValue}{" "}
          </Text>
          <Text style={{ marginTop: 20 }} fontSize={30}>
            kwh
          </Text>
        </HStack>
      </Center>
    </Pressable>
  );
};

const MeterInfo = React.memo(MeterCard);

export default MeterInfo;
