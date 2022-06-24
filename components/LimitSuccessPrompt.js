import React, { memo } from "react";
import { Avatar, Button, Center, Heading, Modal, Text } from "native-base";
import FaIcon from "react-native-vector-icons/FontAwesome";

export default memo(function (props) {
  return (
    <Modal {...props}>
      <Modal.Content
        borderTopColor={"green.400"}
        borderTopWidth={4}
        rounded={"xl"}
        borderRadius={0}
        borderBottomRadius={20}
      >
        <Modal.Body my={4}>
          <Center>
            <Avatar bgColor={"green.400"}>
              <FaIcon color={"#fff"} name={"thumbs-up"} size={40} />
            </Avatar>
          </Center>
          <Center my={2}>
            <Heading>
              <FaIcon name="check" size={20} /> Success
            </Heading>
          </Center>

          <Center>
            <Text>Request successful!</Text>
          </Center>
        </Modal.Body>
      </Modal.Content>
      <Center mt={-5} left={"1"} right={"1"}>
        <Button colorScheme={"coolGray"} onPress={props.btnAction}>
          DONE
        </Button>
      </Center>
    </Modal>
  );
});
