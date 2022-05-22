import React from "react";
import { Center, Stack } from "native-base";
import Icon from "react-native-vector-icons/Entypo";

export const MeterTabIcon = () => {
  return (
    <Center mt={-18}>
      <Stack
        bg={"primary.100"}
        rounded={"full"}
        height={60}
        shadow={9}
        width={60}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Icon name="squared-plus" size={20} color={"white"} />
      </Stack>
    </Center>
  );
};
