import React from "react";
import { Button, HStack } from "native-base";

//icons
import SVGIconBack from "../assets/back.svg";

const StickyHeader = (props) => {
  return (
    <HStack zIndex={3000} px={5} py={2} bgColor={"warmGray.100"}>
      <Button
        onPress={() => props.navigation.goBack()}
        width={12}
        bg={"#fff"}
        _pressed={{ bg: "transparent" }}
        height={12}
        rounded={"2xl"}
      >
        <SVGIconBack />
      </Button>
    </HStack>
  );
};

export default StickyHeader;
