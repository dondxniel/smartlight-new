import React, { useCallback, useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  Heading,
  Text,
  useDisclose,
  View,
} from "native-base";

//nativebase styles
import nbStyles from "../style/nb-styles";
import { PaymentPrompt } from "./PaymentPrompt";
import { usePaymentType } from "../contexts/paymentTypeContext";
import { width } from "../constants/dims";
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
            <Heading>USSD Payment</Heading>
            <Text mt={2}>
              <Text fontWeight={500}>N{amount}</Text> airtime would be deducted
              from your line
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Text>USSD code</Text>
            <Box width={width - 50} bgColor={"#fafafa"} rounded={"2xl"}>
              <Heading size={"lg"} p={3}>
                *174*65478#
              </Heading>
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

export const USSDPayment = React.memo(PaymentComponent);
