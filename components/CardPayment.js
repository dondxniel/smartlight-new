import React, { useCallback, useRef, useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useDisclose,
  View,
} from "native-base";

import { PaymentPrompt } from "./PaymentPrompt.js";

//nativebase styles
import nbStyles from "../style/nb-styles";
import { usePaymentType } from "../contexts/paymentTypeContext";
import { width } from "../constants/dims";

const PaymentComponent = ({ isOpen, onClose }) => {
  const paymentAction = useDisclose();
  const {
    state: { amount },
  } = usePaymentType();
  const [paymentPrompt, setPaymentPrompt] = useState("");
  const [cardNo, setCardNo] = useState("1330 0000 0000 0000");
  const [month, setMonth] = useState("MM");
  const [year, setYear] = useState("YY");
  const [cvv, setCVV] = useState("___");

  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const cvvRef = useRef(null);

  const handleMonthChange = useCallback(
    (val) => {
      setMonth(() => val);
      if (val.length >= 2 && Number(val) <= 12) yearRef.current.focus();
    },
    [month],
  );
  const handleYearChange = useCallback(
    (val) => {
      setYear(() => val);
      if (val.length >= 2) cvvRef.current.focus();
    },
    [year],
  );
  const handleCVVChange = useCallback(
    (val) => {
      setCVV(() => val);
    },
    [cvv],
  );

  const handlePayment = () => {
    onClose();
    if (!true) {
      setPaymentPrompt("successful");
    } else {
      setPaymentPrompt("unsuccesful");
    }
    paymentAction.onOpen();
  };

  return (
    <View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content {...nbStyles.actionSheet.actionSheetContent}>
          <Actionsheet.Item mt={-2} {...nbStyles.actionSheet.actionSheetItem}>
            <Heading>Card Payment</Heading>
            <Text mt={2}>
              A sum of <Text fontWeight={500}>N{amount && amount}</Text> would
              be deducted from your account
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Text color={"#212121"}>Card number</Text>
            <Box width={width - 50}>
              <Input
                p={2.5}
                _focus={{ fontWeight: 500 }}
                bgColor={"#fafafa"}
                borderWidth={0}
                rounded={"2xl"}
                keyboardType="numeric"
                maxLength={19}
                value={cardNo}
                clearTextOnFocus={true}
              />
            </Box>
          </Actionsheet.Item>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Stack
              width={width - 50}
              justifyContent={"space-around"}
              flexDir={"row"}
            >
              <Box>
                <Text color={"#212121"}>Expiry date</Text>
                <Stack
                  flexDir={"row"}
                  bgColor={"#fafafa"}
                  alignItems={"center"}
                  p={1}
                  rounded={"2xl"}
                >
                  <Input
                    w={12}
                    variant={"unstyled"}
                    ref={monthRef}
                    keyboardType="numeric"
                    returnKeyType="next"
                    value={month}
                    placeholder="MM"
                    onChangeText={handleMonthChange}
                    maxLength={2}
                    clearTextOnFocus={true}
                    fontWeight={500}
                    color={"#212121"}
                  />
                  <Text color={"#212121"} fontSize={"xl"} fontWeight={500}>
                    /
                  </Text>

                  <Input
                    w={12}
                    variant={"unstyled"}
                    ref={yearRef}
                    keyboardType="numeric"
                    returnKeyType="next"
                    value={year}
                    onChangeText={handleYearChange}
                    maxLength={2}
                    clearTextOnFocus={true}
                    fontWeight={500}
                    color={"#212121"}
                  />
                </Stack>
              </Box>
              <Box>
                <Text color={"#212121"}>CVV</Text>
                <Input
                  p={3}
                  width={100}
                  ref={cvvRef}
                  keyboardType="numeric"
                  returnKeyType="default"
                  value={cvv}
                  onChangeText={handleCVVChange}
                  maxLength={3}
                  clearTextOnFocus={true}
                  borderWidth={0}
                  rounded={"2xl"}
                  bgColor={"#fafafa"}
                  fontWeight={500}
                  color={"#212121"}
                />
              </Box>
            </Stack>
          </Actionsheet.Item>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Text>Cardholder name</Text>
            <Box width={width - 50} rounded={"2xl"} bgColor={"#fafafa"}>
              <Heading size={"lg"} p={3}>
                Brown Whatever
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
              Proceed
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

export const CardPayment = React.memo(PaymentComponent);
