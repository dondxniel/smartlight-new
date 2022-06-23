import React, { memo, useState } from "react";
import { View, FormControl, Input, Button, Text, useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";

import nbStyles from "../style/nb-styles";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          if (true) {
            navigation.push("_dashboard");
          }
        }}
        validateOnChange={false}
        validate={(values) => {
          /*const errors = {};

          if (!values.email) {
            errors.email = toast.show({
              render: () => (
                <Text {...nbStyles.toastErrorStyle}>Email required!</Text>
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
          } else if (!values.password) {
            errors.password = toast.show({
              render: () => (
                <Text {...nbStyles.toastErrorStyle}>Password required!</Text>
              ),
              placement: "bottom",
            });
          }
          return errors;
          */
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }) => (
          <View>
            <FormControl>
              <Input
                {...nbStyles.inputStyle}
                type="email"
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                placeholder="Email"
                variant="rounded"
                name="email"
                value={values.email}
              />
              <Text>{errors.email && touched.email}</Text>
            </FormControl>
            <FormControl>
              <Input
                {...nbStyles.inputStyle}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChangeText={handleChange("password")}
                value={values.password}
                variant="rounded"
                InputRightElement={
                  <Icon
                    onPress={() => setShowPassword(!showPassword)}
                    style={{ marginRight: 15 }}
                    name={showPassword ? "eye-slash" : "eye"}
                    size={20}
                    color={"#bbb"}
                  />
                }
              />
              <Text>{errors.password && touched.password}</Text>
            </FormControl>
            <FormControl
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text>Forgot Password?</Text>
              <Text style={{ paddingLeft: 9 }}>|</Text>
              <Button
                onPress={() => navigation.navigate("forgot_password")}
                size="md"
                variant="link"
                _text={{ fontWeight: "bold" }}
              >
                Reset
              </Button>
            </FormControl>
            <FormControl flexDirection="column">
              <Button
                width={"full"}
                rounded={"2xl"}
                p={4}
                marginY={4}
                onPress={handleSubmit}
              >
                <Text fontWeight={900} color={"#fff"}>
                  Login
                </Text>
              </Button>
            </FormControl>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default memo(LoginForm);
