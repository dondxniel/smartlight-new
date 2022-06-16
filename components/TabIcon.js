import React from "react";
import { Center, Stack } from "native-base";
import Icon from "react-native-vector-icons/Entypo";

export const MeterTabIcon = () => {
  return (
    <Center mt={"-1"}>
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
  );
};
