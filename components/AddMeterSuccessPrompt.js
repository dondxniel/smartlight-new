import React from "react";
import { Center, Heading, Modal, Text } from "native-base";

import SVGIconSuccess from "../assets/success.svg";

export default function (props) {
  return (
    <Modal {...props}>
      <Modal.Content
        borderTopColor={"green.400"}
        borderTopWidth={4}
        rounded={"xl"}
        borderRadius={0}
        borderBottomRadius={20}
      >
        <Center>
          <SVGIconSuccess width={64} height={64} />
        </Center>
        <Modal.Body>
          <Center my={2}>
            <Heading>Success</Heading>
          </Center>

          <Center>
            <Text>Your meter has been added</Text>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
