import React, { memo, useMemo } from "react";
import { Button, Center, Heading, Modal, Text } from "native-base";
import nbStyles from "../style/nb-styles";

import SVGSuccessIcon from "../assets/success.svg";
import SVGErrorIcon from "../assets/error.svg";
import { width } from "../constants/dims";

const Prompt = ({ isOpen, onClose, prompt }) => {
  return useMemo(() => {
    switch (prompt) {
      case "successful":
        return (
          <Modal isOpen={isOpen} onClose={onClose}>
            <Center
              borderTopWidth={5}
              borderTopColor={"green.500"}
              bg={"white"}
              width={width - 50}
            >
              <SVGSuccessIcon width={100} height={100} />
            </Center>
            <Modal.Content
              borderTopRadius={0}
              borderBottomRadius={"2xl"}
              width={width - 50}
              bgColor={"white"}
            >
              <Modal.Header bgColor={"white"} borderBottomWidth={0}>
                <Center>
                  <Heading>Success</Heading>
                </Center>
              </Modal.Header>
              <Modal.Body>
                <Text>
                  Your payment was successful and 128.67 kwh has been credited
                  to your metter
                </Text>
                <Button
                  my={2}
                  p={4}
                  variant={"outline"}
                  colorScheme={"primary"}
                  width={"full"}
                  rounded={"2xl"}
                >
                  Download Receipt
                </Button>
                <Button
                  my={2}
                  p={4}
                  onPress={onClose}
                  colorScheme={"primary"}
                  width={"full"}
                  rounded={"2xl"}
                >
                  Done
                </Button>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        );

      default:
        return (
          <Modal isOpen={isOpen} onClose={onClose}>
            <Center
              borderTopWidth={5}
              borderTopColor={"red.500"}
              bg={"white"}
              width={width - 50}
            >
              <SVGErrorIcon width={100} height={100} />
            </Center>
            <Modal.Content
              borderTopRadius={0}
              borderBottomRadius={"2xl"}
              width={width - 50}
              bgColor={"white"}
            >
              <Modal.Header bgColor={"white"} borderBottomWidth={0}>
                <Center>
                  <Heading>Failed</Heading>
                </Center>
              </Modal.Header>
              <Modal.Body>
                <Text>Your payment was not successful due to wrong pin</Text>
                <Button
                  my={2}
                  p={4}
                  onPress={onClose}
                  colorScheme={"primary"}
                  width={"full"}
                  rounded={"2xl"}
                >
                  Done
                </Button>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        );
    }
  });
};

export const PaymentPrompt = memo(Prompt);
