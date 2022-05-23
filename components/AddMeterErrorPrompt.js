import React from "react";
import { Center, Heading, Modal, Text } from "native-base";

import SVGIconError from "../assets/error.svg";

export default function (props) {
  return (
    <Modal {...props}>
      <Modal.Content
        borderTopColor={"red.400"}
        borderTopWidth={4}
        rounded={"xl"}
        borderRadius={0}
        borderBottomRadius={20}
      >
        <Center>
          <SVGIconError width={64} height={64} />
        </Center>
        <Modal.Body>
          <Center my={2}>
            <Heading>Failed</Heading>
          </Center>

          <Center>
            <Text>Your meter could not be added</Text>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
