import React, { useCallback, useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  useDisclose,
  View,
} from "native-base";

import CryptoQRCodeIcon from "../assets/crypto-qrcode.svg";
import CopyToClipIcon from "../assets/copytoclip.svg";

//nativebase styles
import nbStyles from "../style/nb-styles";
import { usePaymentType } from "../contexts/paymentTypeContext";
import { width } from "../constants/dims";
import { PaymentPrompt } from "./PaymentPrompt";
import { TouchableOpacity } from "react-native";

const PaymentComponent = ({ isOpen, onClose }) => {
  const {
    state: { amount },
  } = usePaymentType();
  const paymentAction = useDisclose();
  const [paymentPrompt, setPaymentPrompt] = useState("");
  const handlePayment = useCallback(() => {
    onClose();
    if (!true) {
      setPaymentPrompt("successful");
    } else {
      setPaymentPrompt("unsuccesful");
    }
    paymentAction.onOpen();
  }, []);

  return (
    <View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content {...nbStyles.actionSheet.actionSheetContent}>
          <ScrollView>
            <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
              <Heading>Bank Transfer</Heading>
              <Text mt={2}>
                Send USDT to the address below for instant activation
              </Text>
            </Actionsheet.Item>
            <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
              <Text>Amount</Text>
              <Box width={width - 50} bgColor={"#fafafa"} rounded={"2xl"}>
                <Heading size={"lg"} p={3}>
                  {((amount - 100) / 419.5).toFixed(2)} USDT
                </Heading>
              </Box>
              <Center width={width - 50}>
                <CryptoQRCodeIcon />
              </Center>
              <Text>Account number</Text>
              <Box
                width={width - 50}
                p={4}
                my={1}
                bgColor={"#fafafa"}
                rounded={"2xl"}
              >
                <Stack
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  space={"lg"}
                  flexDir={"row"}
                >
                  <TouchableOpacity>
                    <Text>0xF5D152C0C7....EAB3E8F</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Center>
                      <CopyToClipIcon />
                    </Center>
                  </TouchableOpacity>
                </Stack>
              </Box>
              <Button
                mt={1}
                _text={{ fontWeight: 500 }}
                p={4}
                colorScheme={"primary"}
                width={"full"}
                rounded={"2xl"}
                onPress={handlePayment}
              >
                Done
              </Button>
            </Actionsheet.Item>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
      <PaymentPrompt
        prompt={paymentPrompt}
        isOpen={paymentAction.isOpen}
        onClose={paymentAction.onClose}
      />
    </View>
  );
};

export const CryptoPayment = React.memo(PaymentComponent);
