import React, { memo } from "react";
import { Button, Heading, HStack } from "native-base";

import nbStyles from "../style/nb-styles";
//icons
import SVGIconBack from "../assets/back.svg";

const StickyHeader = ({ navigation, headerTitle }) => {
  return (
    <HStack
      alignItems={"center"}
      zIndex={3000}
      px={4}
      py={0}
      bgColor={"warmGray.100"}
    >
      {navigation && (
        <Button
          onPress={() => navigation.goBack()}
          h={10}
          w={10}
          bg={"#fff"}
          _pressed={{ bg: "transparent" }}
          rounded={"lg"}
          shadow={1.99}
          style={{ shadowOpacity: 0.5 }}
        >
          <SVGIconBack />
        </Button>
      )}
      <Heading {...nbStyles.notificationHeading}>{headerTitle}</Heading>
    </HStack>
  );
};

export default memo(StickyHeader);
