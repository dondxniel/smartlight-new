import React from "react";
import { Box, Button, Card, Heading, Text, View } from "native-base";
import MDIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import BgImage from "../assets/form-bg.svg";

//constants
import { height, width } from "../constants/dims";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import rnStyles from "../style/rn-styles";

const FormsWidget = ({ children, description, heading }) => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      scrollToOverflowEnabled={true}
      contentContainerStyle={{
        height: height - 10,
        backgroundColor: "#5961E0",
      }}
    >
      <BgImage />
      <Button
        rounded={"lg"}
        width={50}
        bg={"trueGray.50"}
        onPress={() => navigation.goBack()}
        _pressed={{
          backgroundColor: "trueGray.50",
        }}
        position="absolute"
        top={50}
        left={5}
        justifyContent={"center"}
      >
        <MDIcon
          size={20}
          style={{ color: "black", padding: 5 }}
          name="arrow-back-ios"
        />
      </Button>
      <View {...rnStyles.backgroundOverlay} height={"auto"} bottom={0}>
        <Card {...rnStyles.formCard(1.1)} w={width - 18} left={-18}>
          <Heading mb={4}>{heading}</Heading>
          <Text>{description}</Text>
          <Box my={4}>{children}</Box>
        </Card>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default React.memo(FormsWidget);
