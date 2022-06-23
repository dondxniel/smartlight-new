import React, { memo, useRef } from "react";
import { Formik } from "formik";
import { Button, FormControl, HStack, Input, Text } from "native-base";

//components
import FormsWidget from "../components/FormsWidget";
import { useNavigation } from "@react-navigation/native";

const inputGroupStyle = {
  bgColor: "#fafafa",
  h: 58,
  w: 58,
  borderColor: "#fafafa",
  type: "number",
  rounded: "2xl",
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

export default memo(function () {
  const navigation = useNavigation();
  const unoRef = useRef(0);
  const dueRef = useRef(0);
  const treRef = useRef(0);
  const quattroRef = useRef(0);
  return (
    <FormsWidget
      heading="Enter OTP"
      description={`An OTP has been sent to your email. \'w Enter OTP below to reset Password`}
    >
      <Formik
        onSubmit={() => {
          if (true) navigation.navigate("new_password");
        }}
        initialValues={{ uno: "", due: "", tre: "", quattro: "" }}
        validate={(values) => {
          values.uno.length && dueRef.current.focus();

          values.due.length && treRef.current.focus();

          values.tre.length && quattroRef.current.focus();
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <FormControl>
            <HStack space={"sm"}>
              <Input
                ref={unoRef}
                onChangeText={handleChange("uno")}
                id="uno"
                value={values.uno}
                {...inputGroupStyle}
              />
              <Input
                ref={dueRef}
                onChangeText={handleChange("due")}
                id="due"
                value={values.due}
                {...inputGroupStyle}
              />
              <Input
                ref={treRef}
                onChangeText={handleChange("tre")}
                id="tre"
                value={values.tre}
                {...inputGroupStyle}
              />
              <Input
                ref={quattroRef}
                onChangeText={handleChange("quattro")}
                id="quattro"
                value={values.quattro}
                {...inputGroupStyle}
              />
            </HStack>
            <Button
              width={"full"}
              onPress={handleSubmit}
              mt={4}
              rounded={"2xl"}
              p={4}
            >
              <Text
                fontWeight={"black"}
                letterSpacing={0.5}
                color={"trueGray.50"}
              >
                Submit
              </Text>
            </Button>
          </FormControl>
        )}
      </Formik>
    </FormsWidget>
  );
});
