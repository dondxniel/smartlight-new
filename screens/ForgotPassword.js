import React, { memo } from "react";
import { Button, FormControl, Input, Text, useToast } from "native-base";
import { Formik } from "formik";

//components
import FormsWidget from "../components/FormsWidget";

import nbStyles from "../style/nb-styles";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const toast = useToast();
  return (
    <FormsWidget
      heading={"Forgot Password"}
      description={`Don't worry, happens to the best of us. Please enter the email registered to your account.`}
      btnTitle={"Submit"}
    >
      <Formik
        initialValues={{ email: "" }}
        onSubmit={() => {
          if (true) {
            navigation.navigate("otp");
          }
        }}
        validateOnChange={false}
        validateOnBlur={true}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = toast.show({
              render: () => (
                <Text {...nbStyles.toastErrorStyle}>Email Required!</Text>
              ),
              placement: "bottom",
            });
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = toast.show({
              render: () => (
                <Text {...nbStyles.toastErrorStyle}>
                  Invalid email address.
                </Text>
              ),
              placement: "bottom",
            });
          }

          return errors;
        }}
      >
        {({
          errors,
          touched,
          values,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <FormControl>
            <Input
              type="text"
              {...nbStyles.inputStyle}
              placeholder="Email"
              variant="rounded"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email}
            <Button onPress={handleSubmit} rounded={"2xl"} p={4}>
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
};

export default memo(ForgotPassword);
