import React from "react";
import { Center, Pressable } from "native-base";

//icons
import SVGIconPlus from "../assets/plus.svg";

export default function ({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      justifyContent={"center"}
      p={4}
      background={"#51DFA8"}
      rounded={"2xl"}
      flex={0.1}
    >
      <Center>
        <SVGIconPlus width={20} height={20} />
      </Center>
    </Pressable>
  );
}
