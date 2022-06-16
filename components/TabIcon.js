import React, { memo, useState } from "react";
import {
  Actionsheet,
  Button,
  Center,
  Heading,
  Pressable,
  Stack,
  Text,
  useDisclose,
  View,
} from "native-base";

//icons
import Icon from "react-native-vector-icons/Entypo";
//components
import BuyMeter from "./BuyMeter.js";
export const MeterTabIcon = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclose();

  return (
    <View flex={1}>
      <Pressable onPress={onOpen}>
        <Center mt={"-2"}>
          <Stack
            bg={"primary.100"}
            rounded={"full"}
            height={"12"}
            width={"12"}
            shadow={9}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Icon name="squared-plus" size={20} color={"white"} />
          </Stack>
        </Center>
      </Pressable>
      <BuyMeter isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </View>
  );
});
