import React, { memo } from "react";
import {
  Actionsheet,
  Box,
  Center,
  FlatList,
  Heading,
  Pressable,
  useDisclose,
  View,
} from "native-base";

//nativebase styles
import nbStyles from "../style/nb-styles";
import { width } from "../constants/dims";

import { paymentMethods } from "../mocks/index";

//components
import { CardPayment } from "./CardPayment";
import { TransferPayment } from "./TransferPayment";
import { CryptoPayment } from "./CryptoPayment";
import { USSDPayment } from "./USSDPayment";

function ProceedActions({ proceedActions }) {
  const { isOpen, onClose } = proceedActions;
  const __Card_Payment = useDisclose();
  const __Transfer_Payment = useDisclose();
  const __Crypto_Payment = useDisclose();
  const __USSD_Payment = useDisclose();

  return (
    <Box>
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
                renderItem={({ item: { icon, type }, index }) => (
                  <Pressable
                    onPress={() => {
                      onClose();
                      switch (index) {
                        case 0:
                          __Card_Payment.onOpen();
                          break;
                        case 1:
                          __Transfer_Payment.onOpen();
                          break;
                        case 2:
                          __Crypto_Payment.onOpen();
                          break;
                        case 3:
                          __USSD_Payment.onOpen();
                          break;

                        default:
                          throw new Error("Unhandled payment method");
                      }
                    }}
                    my={2}
                  >
                    <Center {...nbStyles.actionSheet.paymentMethod}>
                      {icon}
                      <Heading mt={2} color={"primary.500"} size={"md"}>
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
      <CardPayment
        isOpen={__Card_Payment.isOpen}
        onClose={__Card_Payment.onClose}
      />
      <TransferPayment
        isOpen={__Transfer_Payment.isOpen}
        onClose={__Transfer_Payment.onClose}
      />
      <CryptoPayment
        isOpen={__Crypto_Payment.isOpen}
        onClose={__Crypto_Payment.onClose}
      />
      <USSDPayment
        isOpen={__USSD_Payment.isOpen}
        onClose={__USSD_Payment.onClose}
      />
    </Box>
  );
}

export default memo(ProceedActions);
