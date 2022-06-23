import React from "react";
import {
  View,
  FormControl,
  Input,
  Button,
  Text,
  Select,
  HStack,
} from "native-base";
import { Formik } from "formik";

const inputStyle = {
  bgColor: "#fafafa",
  h: 58,
  borderColor: "#fafafa",
  type: "tel",
};
const inputGroupStyle = {
  bgColor: "#fafafa",
  h: 58,
  w: 58,
  borderColor: "#fafafa",
  type: "number",
  rounded: "lg",
  placeholder: "_",
  variant: "rounded",
  keyboardType: "numeric",
  alignItems: "center",
  maxLength: 1,
  _input: {
    fontSize: 30,
    textAlign: "center",
  },
};
const VerifyPhoneNumber = () => {
  return (
    <Formik
      initialValues={{ countryCode: "+234", phonenumber: "" }}
      onSubmit={(values) => {}}
      validate={(values) => {
        const errors = {};

        if (!values.phonenumber) {
          errors.phonenumber = "Phone Required!";
        }

        return errors;
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
      }) => (
        <View
          style={{
            marginBottom: 200,
          }}
        >
          <FormControl>
            <Input
              {...inputStyle}
              type="tel"
              onChangeText={handleChange("phonenumber")}
              onBlur={handleBlur("phonenumber")}
              placeholder="Phonenumber"
              variant="rounded"
              keyboardType="numeric"
              InputLeftElement={
                <Select
                  width={75}
                  borderWidth={0}
                  selectedValue={values.countryCode}
                  mt={1}
                  onValueChange={handleChange("countryCode")}
                  _selectedItem={{
                    bg: "teal.100",
                    textAlign: "center",
                  }}
                >
                  <Select.Item label="+234" value="+234" />
                  <Select.Item label="+130" value="+130" />
                  <Select.Item label="+123" value="+123" />
                  <Select.Item label="+422" value="+422" />
                </Select>
              }
            />
            <Text>
              {errors.phonenumber && touched.phonenumber && errors.phonenumber}
            </Text>
            <Button
              variant={"unstyled"}
              _text={{
                fontWeight: "bold",
                color: "primary.100",
              }}
            >
              Sent OTP
            </Button>
          </FormControl>
          <FormControl>
            <HStack space={"lg"}>
              <Input {...inputGroupStyle} />
              <Input {...inputGroupStyle} />
              <Input {...inputGroupStyle} />
              <Input {...inputGroupStyle} />
            </HStack>
            <Button p={4} rounded={"2xl"} marginY={4} onPress={handleSubmit}>
              <Text fontWeight={900} color={"#fff"}>
                Finish
              </Text>
            </Button>
          </FormControl>
        </View>
      )}
    </Formik>
  );
};

export default VerifyPhoneNumber;
