import React, { useState } from "react";
import {
  Actionsheet,
  Center,
  FlatList,
  Heading,
  Pressable,
  View,
} from "native-base";

import CardIcon from "../assets/card-payment.svg";
import BankTransferIcon from "../assets/transfer-payment.svg";
import CryptoIcon from "../assets/crypto-payment.svg";
import USSDIcon from "../assets/ussd-payment.svg";

//nativebase styles
import nbStyles from "../style/nb-styles";
import { width } from "../constants/dims";

function PaymentActions({ handleProceedAction }) {
  const { isOpen, onClose } = handleProceedAction;
  const [paymentMethods] = useState([
    { type: "Card", icon: <CardIcon /> },
    { type: "Bank Transfer", icon: <BankTransferIcon /> },
    { type: "Crypto", icon: <CryptoIcon /> },
    { type: "USSD", icon: <USSDIcon /> },
  ]);
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
          <Heading>Select Payment Method</Heading>
        </Actionsheet.Item>
        <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
          <View>
            <FlatList
              flexWrap={"wrap"}
              numColumns={2}
              contentContainerStyle={{
                width: width - 50,
              }}
              columnWrapperStyle={{ justifyContent: "space-around" }}
              data={paymentMethods}
              keyExtractor={(_, key) => key.toString()}
              renderItem={({ item: { icon, type } }) => (
                <Pressable onPress={onClose} my={2}>
                  <Center {...nbStyles.actionSheet.paymentMethod}>
                    {icon}
                    <Heading mt={2} color={"primary.100"} size={"md"}>
                      {type}
                    </Heading>
                  </Center>
                </Pressable>
              )}
            />
          </View>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default PaymentActions;
