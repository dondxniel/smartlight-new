import React from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  Modal,
  Text,
  View,
} from "native-base";
import { Formik } from "formik";
import AddMeterErrorPrompt from "./AddMeterErrorPrompt";
import AddMeterSuccessPrompt from "./AddMeterSuccessPrompt";

const ModalComp = (props) => {
  const { onClose } = props;

  const [openSuccessPrompt, setOpenSuccessPrompt] = React.useState(false);
  const [openErrorPrompt, setOpenErrorPrompt] = React.useState(false);
  return (
    <Container>
      <Modal {...props}>
        <Modal.Content>
          <Modal.Header borderBottomWidth={0}>
            Add your meter to continue
          </Modal.Header>
          <Modal.Body>
            <Formik
              onSubmit={(values) => {
                onClose();
                if (true) {
                  setOpenSuccessPrompt(true);
                  setTimeout(() => setOpenSuccessPrompt(false), 5000);
                } else {
                  setOpenErrorPrompt(true);
                  setTimeout(() => setOpenErrorPrompt(false), 5000);
                }
              }}
              initialValues={{
                meter_no: "",
                meter_name: "",
                meter_location: "",
              }}
            >
              {({ handleSubmit, handleChange, values }) => (
                <View>
                  <FormControl mb={2}>
                    <Text>Meter number</Text>
                    <Input
                      value={values.meter_no}
                      onChangeText={handleChange("meter_no")}
                      keyboardType="number-pad"
                      my={1}
                      p={3}
                      backgroundColor={"#f3f3f3"}
                      borderWidth={0}
                      rounded={"full"}
                      placeholder="37144433351"
                      size={"lg"}
                      _input={{
                        fontWeight: "semibold",
                      }}
                      _focus={{
                        opacity: 0.8,
                        borderColor: "blue.200",
                        borderWidth: 1,
                      }}
                    />
                  </FormControl>
                  <FormControl my={2}>
                    <Text>Meter name</Text>
                    <Input
                      value={values.meter_name}
                      onChangeText={handleChange("meter_name")}
                      my={1}
                      p={3}
                      backgroundColor={"#f3f3f3"}
                      borderWidth={0}
                      rounded={"full"}
                      placeholder="Chibuzor Manifekula"
                      size={"lg"}
                      _input={{
                        fontWeight: "semibold",
                      }}
                      _focus={{
                        opacity: 0.8,
                        borderColor: "blue.200",
                        borderWidth: 1,
                      }}
                    />
                  </FormControl>
                  <FormControl mt={2}>
                    <Text>Meter locaton</Text>
                    <Input
                      value={values.meter_location}
                      onChangeText={handleChange("meter_location")}
                      my={1}
                      p={3}
                      backgroundColor={"#f3f3f3"}
                      borderWidth={0}
                      rounded={"full"}
                      placeholder="No. 3 Jutaliu Street, U/Sunday Kaduna."
                      size={"lg"}
                      _input={{
                        fontWeight: "semibold",
                      }}
                      _focus={{
                        opacity: 0.8,
                        borderColor: "blue.200",
                        borderWidth: 1,
                      }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <Button onPress={handleSubmit} padding={4} rounded={"2xl"}>
                      Add Meter
                    </Button>
                  </FormControl>
                </View>
              )}
            </Formik>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <AddMeterSuccessPrompt isOpen={openSuccessPrompt} />
      <AddMeterErrorPrompt isOpen={openErrorPrompt} />
    </Container>
  );
};

const AddMeterPrompt = React.memo(ModalComp);
export default AddMeterPrompt;
