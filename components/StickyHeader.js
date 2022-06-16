import React from "react";
import { Button, Heading, HStack } from "native-base";

import nbStyles from "../style/nb-styles";
//icons
import SVGIconBack from "../assets/back.svg";

const StickyHeader = (props) => {
  return (
    <HStack zIndex={3000} px={5} py={2} bgColor={"warmGray.100"}>
      {props.navigation && (
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
      )}
      <Heading {...nbStyles.notificationHeading}>{props.headerTitle}</Heading>
    </HStack>
  );
};

export default StickyHeader;
