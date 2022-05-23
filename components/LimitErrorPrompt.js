import React from "react";
import { Avatar, Button, Center, Heading, Modal, Text } from "native-base";
import FaIcon from "react-native-vector-icons/FontAwesome";

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
        <Modal.Body my={4}>
          <Center>
            <Avatar bgColor={"red.400"}>
              <FaIcon color={"#fff"} name={"thumbs-down"} size={40} />
            </Avatar>
          </Center>
          <Center my={2}>
            <Heading>
              <FaIcon name="exclamation-triangle" size={20} /> Error
            </Heading>
          </Center>

          <Center>
            <Text>
              Sorry! It seems the request went wrong, please try again.
            </Text>
          </Center>
        </Modal.Body>
      </Modal.Content>
      <Center mt={-5} left={"1"} right={"1"}>
        <Button colorScheme={"coolGray"} onPress={props.btnAction}>
          OK
        </Button>
      </Center>
    </Modal>
  );
}
