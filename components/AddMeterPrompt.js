import React from "react";
import {
  Actionsheet,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  ScrollView,
  Text,
} from "native-base";
import { Formik } from "formik";
import AddMeterErrorPrompt from "./AddMeterErrorPrompt";
import AddMeterSuccessPrompt from "./AddMeterSuccessPrompt";
import { width } from "../constants/dims";
import nbStyles from "../style/nb-styles";

const ActionsheetComp = (props) => {
  const { onClose } = props;

  const [openSuccessPrompt, setOpenSuccessPrompt] = React.useState(false);
  const [openErrorPrompt, setOpenErrorPrompt] = React.useState(false);
  return (
    <Center ml={"4"} mr={"4"}>
      <Actionsheet {...props}>
        <Actionsheet.Content {...nbStyles.actionSheet.actionSheetContent}>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Heading> Add your meter to continue</Heading>
          </Actionsheet.Item>
          <Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
            <Formik
              onSubmit={(values) => {
                onClose();
                if (true) {
                  setOpenSuccessPrompt(true);
                  setTimeout(() => setOpenSuccessPrompt(false), 3000);
                } else {
                  setOpenErrorPrompt(true);
                  setTimeout(() => setOpenErrorPrompt(false), 3000);
                }
              }}
              initialValues={{
                meter_no: "",
                meter_name: "",
                meter_location: "",
              }}
            >
              {({ handleSubmit, handleChange, values }) => (
                <ScrollView width={width - 50}>
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
                    <Button
                      onPress={handleSubmit}
                      size={"lg"}
                      padding={4}
                      rounded={"2xl"}
                    >
                      Add Meter
                    </Button>
                  </FormControl>
                </ScrollView>
              )}
            </Formik>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <AddMeterSuccessPrompt isOpen={openSuccessPrompt} />
      <AddMeterErrorPrompt isOpen={openErrorPrompt} />
    </Center>
  );
};

const AddMeterPrompt = React.memo(ActionsheetComp);
export default AddMeterPrompt;
