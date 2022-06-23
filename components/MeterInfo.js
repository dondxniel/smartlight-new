import React from "react";
import { Avatar, HStack, Pressable, Stack, Text, VStack } from "native-base";

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
      p={5}
      background={"#fff"}
      rounded={"2xl"}
      height={horizontal ? 145 : 160}
      flex={0.9}
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
            <Text>{meterInfo}</Text>
          </HStack>
        </VStack>
      </Stack>

      <HStack mt={horizontal && 7} ml={horizontal && 10} alignItems={"center"}>
        <Text fontSize={40} fontWeight={"bold"} color={"#5961E0"}>
          {meterValue}
        </Text>
        <Text fontSize={30} mt={2}>
          {" "}
          kwh
        </Text>
      </HStack>
    </Pressable>
  );
};

const MeterInfo = React.memo(MeterCard);

export default MeterInfo;
