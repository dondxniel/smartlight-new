import React, { useCallback, useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  Heading,
  Input,
  Text,
  useDisclose,
  View,
} from "native-base";

//nativebase styles
import nbStyles from "../style/nb-styles";
import { usePaymentType } from "../contexts/paymentTypeContext";
import { width } from "../constants/dims";
import { PaymentPrompt } from "./PaymentPrompt";
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
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Heading>Bank Transfer</Heading>
            <Text mt={2}>
              Pay the sum of <Text fontWeight={500}>N{amount}</Text> to the
              following account details
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Text>Bank</Text>
            <Box width={width - 50} bgColor={"#fafafa"} rounded={"2xl"}>
              <Heading size={"lg"} p={3}>
                Access Bank
              </Heading>
            </Box>
            <Text>Account name</Text>
            <Box width={width - 50} bgColor={"#fafafa"} rounded={"2xl"}>
              <Heading size={"lg"} p={3}>
                Smart Power Ltd.
              </Heading>
            </Box>
            <Text>Account number</Text>
            <Box width={width - 50} bgColor={"#fafafa"} rounded={"2xl"}>
              <Heading size={"lg"} p={3}>
                0102000022
              </Heading>
            </Box>
            <Button
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

export const TransferPayment = React.memo(PaymentComponent);
