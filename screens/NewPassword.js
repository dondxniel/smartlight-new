import React, { memo } from "react";
import { Formik } from "formik";
import { Button, FormControl, Input, Text, useToast } from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";

//components
import FormsWidget from "../components/FormsWidget";
import { useNavigation } from "@react-navigation/native";
import nbStyles from "../style/nb-styles";

export default memo(function () {
  const navigation = useNavigation();
  const toast = useToast();
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <FormsWidget
      heading="New Password"
      description={`Enter a new password to access our services`}
    >
      <Formik
        onSubmit={() => {
          //hangle communication with server
        }}
        validateOnChange={false}
        initialValues={{ password: "", confirm_password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.password) {
            errors.password = toast.show({
              render: () => (
                <Text {...nbStyles.toastErrorStyle}>
                  New password required!
                </Text>
              ),
              placement: "bottom",
            });
          } else if (values.confirm_password !== values.password) {
            errors.confirm_password = toast.show({
              render: () => (
                <Text {...nbStyles.toastErrorStyle}>
                  Passwords does not match!
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
              type={showPassword ? "text" : "password"}
              placeholder="New password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              {...nbStyles.inputStyle}
              j
              InputRightElement={
                <FAIcon
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ marginRight: 15 }}
                  name={showPassword ? "eye-slash" : "eye"}
                  size={20}
                  color={"#bbb"}
                />
              }
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter password"
              onChangeText={handleChange("confirm_password")}
              onBlur={handleBlur("confirm_password")}
              value={values.confirm_password}
              {...nbStyles.inputStyle}
              InputRightElement={
                <FAIcon
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ marginRight: 15 }}
                  name={showPassword ? "eye-slash" : "eye"}
                  size={20}
                  color={"#bbb"}
                />
              }
            />
            {errors.password && touched.password}
            {errors.confirm_password && touched.confirm_password}
            <Button onPress={handleSubmit} mt={4} rounded={"2xl"} p={4}>
              <Text
                fontWeight={"black"}
                letterSpacing={0.5}
                color={"trueGray.50"}
              >
                Reset
              </Text>
            </Button>
          </FormControl>
        )}
      </Formik>
    </FormsWidget>
  );
});
