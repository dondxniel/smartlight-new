import React, { memo, useState } from "react";
import {
  Actionsheet,
  Button,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Input,
  Text,
} from "native-base";

//styles
import nbStyles from "../style/nb-styles";
import NairaIcon from "../assets/naira-green.svg";
import { MeterCard } from "./MeterCard";
import { width } from "../constants/dims";

const BuyMeterModal = ({ isOpen, onClose }) => {
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
    <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
      <Actionsheet.Content>
        <Actionsheet.Item _pressed={{ background: "transparent" }}>
          <Heading>Buy Units</Heading>
        </Actionsheet.Item>
        <Actionsheet.Item _pressed={{ background: "transparent" }}>
          <Text>Select Meter</Text>
          <FlatList
            contentOffset={{ x: 10, y: 10 }}
            horizontal
            data={meters}
            keyExtractor={(_, id) => id.toString()}
            renderItem={({ item: { address, meter_no, name } }) => (
              <MeterCard address={address} meter_no={meter_no} name={name} />
            )}
          />
        </Actionsheet.Item>
        <Actionsheet.Item _pressed={{ background: "transparent" }}>
          <Text>Enter Amount</Text>
          ds
          <Input
            size={"sm"}
            rounded={"2xl"}
            width={width - 50}
            type="text"
            placeholder="1,000"
            leftElement={
              <IconButton>
                <NairaIcon height={20} width={20} />
              </IconButton>
            }
          />
          <Text>Expected Unit</Text>
          <HStack>
            <Text fontWeight={700}>128.6</Text>
            <Text>kwh</Text>
          </HStack>
        </Actionsheet.Item>
        <Actionsheet.Item _pressed={{ background: "transparent" }}>
          <HStack>
            <Text>Additional</Text>
            <Text fontWeight={500}> N100 </Text>
            <Text>will be charged on purchase</Text>
          </HStack>
          <Button {...nbStyles.logoutBtn} width={width - 50}>
            Proceed
          </Button>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};

const BuyMeter = memo(BuyMeterModal);
export default BuyMeter;
