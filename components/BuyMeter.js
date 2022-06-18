import React, { memo, useState } from "react";
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

//styles
import nbStyles from "../style/nb-styles";
import NairaIcon from "../assets/naira-green.svg";
import { MeterCard } from "./MeterCard";
import { width } from "../constants/dims";
import PaymentActions from "./PaymentActions";

const BuyMeterModal = ({ isOpen, onClose }) => {
  const paymentBtnAction = useDisclose();
  const [meters] = useState([
    {
      name: "Chibuzor Akachukwu",
      address: "U/Sunday Kaduna",
      meter_no: 37144433351,
    },
    {
      name: "Chibuzor Akachukwu",
      address: "U/Sunday Kaduna",
      meter_no: 37144433351,
    },
    {
      name: "Chibuzor Akachukwu",
      address: "U/Sunday Kaduna",
      meter_no: 37144433351,
    },
  ]);

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
                renderItem={({ item: { address, meter_no, name } }, id) => (
                  <MeterCard
                    address={address}
                    meter_no={meter_no}
                    name={name}
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
                mt={2}
                backgroundColor={"#fafafa"}
                size={"sm"}
                borderWidth={0}
                rounded={"2xl"}
                width={width - 50}
                type="text"
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
                  128.6
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
                onPress={paymentBtnAction.onOpen}
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
      <PaymentActions handleProceedAction={paymentBtnAction} />
    </Box>
  );
};

const BuyMeter = memo(BuyMeterModal);
export default BuyMeter;
