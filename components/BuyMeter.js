import React, { memo, useCallback, useMemo, useState } from "react";
import {
  Actionsheet,
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Input,
  ScrollView,
  Text,
  useDisclose,
} from "native-base";

//contexts
import { usePaymentType } from "../contexts/paymentTypeContext";

//mock data
import { meters } from "../mocks/";

//icons
import NairaIcon from "../assets/naira-green.svg";

//styles
import nbStyles from "../style/nb-styles";
import { width } from "../constants/dims";

//components
import { MeterCard } from "./MeterCard";
import ProceedActions from "./ProceedActions";
import AddMeterButton from "./AddMeterButton";
import AddMeterPrompt from "./AddMeterPrompt";

const BuyMeterModal = ({ isOpen, onClose }) => {
  const paymentBtnAction = useDisclose();
  const addMeterAction = useDisclose();
  const [inputAmount, setInputAmount] = useState(0);
  const [kwh, setKWH] = useState(0);
  const { dispatch } = usePaymentType();

  const handlePaymentActions = useCallback(() => {
    let amount = inputAmount && parseInt(inputAmount); // convert to a number
    if (amount && amount >= 500) {
      onClose();
      dispatch({ type: "METER_AMOUNT", payload: amount });
      paymentBtnAction.onOpen();
      setInputAmount(0);
      setKWH(0);
    }
    return;
  }, [inputAmount, kwh]);

  const handleAddMeter = useCallback(() => {
    onClose();
    addMeterAction.onOpen();
  }, []);

  const handleChangeText = useCallback(
    //handle unwanted update
    (val) => {
      let amount = val && parseInt(val); // convert to a number
      const kwh = 3.791875;
      /*
    1kwh === N3.791875
    xkwh === amount
     */
      let EQUIVALENT_KWH_ = amount / kwh;
      setKWH(() => EQUIVALENT_KWH_);
      setInputAmount(() => val);
    },
    [inputAmount, kwh],
  );

  console.log("buy meter mount");

  return (
    <Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bg={"white"}>
          <ScrollView>
            <Actionsheet.Item
              bg={"white"}
              {...nbStyles.actionSheet.actionSheetItem}
            >
              <Heading>Buy Units</Heading>
              <Text mt={2}>Select Meter</Text>
            </Actionsheet.Item>
            <Actionsheet.Item
              mt={-5}
              bg={"white"}
              {...nbStyles.actionSheet.actionSheetItem}
            >
              <FlatList
                horizontal
                contentOffset={{ x: 10, y: 10 }}
                data={meters}
                keyExtractor={(_, id) => id.toString()}
                renderItem={({ item: { address, meter_no, name }, index }) => (
                  <MeterCard
                    address={address}
                    meter_no={meter_no}
                    name={name}
                    AddMeterComponent={
                      index === meters.length - 1 && (
                        <AddMeterButton onPress={handleAddMeter} />
                      )
                    }
                  />
                )}
              />
            </Actionsheet.Item>
            <Actionsheet.Item
              bg={"white"}
              {...nbStyles.actionSheet.actionSheetItem}
            >
              <Text mt={-3}>Enter Amount</Text>

              <Input
                onChangeText={handleChangeText}
                value={inputAmount}
                keyboardType={"numeric"}
                mt={2}
                backgroundColor={"#fafafa"}
                size={"sm"}
                borderWidth={0}
                rounded={"2xl"}
                width={width - 50}
                placeholder="1,000"
                leftElement={
                  <IconButton ml={2} rounded={15} bg={"#52DDA8"}>
                    <NairaIcon height={20} width={20} />
                  </IconButton>
                }
              />
              <Text mt={2}>Expected Unit</Text>
              <HStack
                alignItems={"center"}
                mt={2}
                p={3}
                bg={"#fafafa"}
                rounded={"2xl"}
              >
                <Text fontSize={"lg"} fontWeight={700}>
                  {kwh.toFixed(2)}
                </Text>
                <Text fontSize={"md"}> kwh</Text>
              </HStack>
            </Actionsheet.Item>
            <Actionsheet.Item
              bg={"white"}
              {...nbStyles.actionSheet.actionSheetItem}
            >
              <HStack mt={-5} pb={2}>
                <Text>Additional</Text>
                <Text fontWeight={500}> N100 </Text>
                <Text>will be charged on purchase</Text>
              </HStack>
              <Button
                onPress={handlePaymentActions}
                p={4}
                {...nbStyles.logoutBtn}
                width={width - 50}
              >
                Proceed
              </Button>
            </Actionsheet.Item>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
      <ProceedActions proceedActions={paymentBtnAction} />
      <AddMeterPrompt
        isOpen={addMeterAction.isOpen}
        onClose={addMeterAction.onClose}
      />
    </Box>
  );
};

const BuyMeter = memo(BuyMeterModal);
export default BuyMeter;
