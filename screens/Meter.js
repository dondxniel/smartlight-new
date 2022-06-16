import { Actionsheet, FlatList, Heading, useDisclose, View } from "native-base";
import React, { useState } from "react";

import Meter from "../components/Meter";

export default function (props) {
  const { isOpen, onClose } = useDisclose();

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
    <View>
      <Heading>Hello</Heading>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Header>Buy Unit</Actionsheet.Header>
          <Actionsheet.Item>
            <Text>Select Meter</Text>
            <FlatList
              horizontal
              data={meters}
              renderItem={({ item: { address, meter_no, name } }) => (
                <Meter {...address} {...meter_no} {...name} />
              )}
            />
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
}
