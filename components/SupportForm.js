import React, { memo, useState } from "react";
import {
	View,
	FormControl,
	Input,
	Button,
	Text,
	TextArea,
	Heading,
	ScrollView,
} from "native-base";
// import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
// import Icon from "react-native-vector-icons/FontAwesome";

import nbStyles from "../style/nb-styles";

const SupportForm = () => {
	// 	const navigation = useNavigation();
	// 	const toast = useToast();
	return (
		<ScrollView m={5}>
			<Heading size="sm">
				What message would you like to send to our team?
			</Heading>
			<Formik
				initialValues={{ name: "", email: "", message: "" }}
				onSubmit={(values) => {
					if (true) {
						// navigation.push("_dashboard");
						console.log("Form Submitted");
					}
				}}
				validateOnChange={false}
				validate={(values) => {}}
			>
				{({
					errors,
					touched,
					handleSubmit,
					handleChange,
					handleBlur,
					values,
				}) => (
					<View
						style={{
							marginTop: 35,
						}}
					>
						<FormControl>
							<Input
								{...nbStyles.inputStyle}
								type="text"
								onBlur={handleBlur("name")}
								onChangeText={handleChange("name")}
								placeholder="Full Name"
								variant="rounded"
								name="name"
								value={values.name}
							/>
							<Text>{errors.name && touched.name}</Text>
						</FormControl>
						<FormControl>
							<Input
								{...nbStyles.inputStyle}
								type="email"
								placeholder="Email"
								onChangeText={handleChange("email")}
								value={values.email}
								variant="rounded"
								name="email"
							/>
							<Text>{errors.email && touched.email}</Text>
						</FormControl>
						<FormControl>
							<TextArea
								{...nbStyles.inputStyle}
								h={90}
								placeholder="Enter your message"
								w="100%"
								name="message"
								value={values.message}
								onChangeText={handleChange("message")}
							/>
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
									Send
								</Text>
							</Button>
						</FormControl>
					</View>
				)}
			</Formik>
		</ScrollView>
	);
};

export default memo(SupportForm);
