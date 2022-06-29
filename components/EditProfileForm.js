import React, { memo, useState } from "react";
import {
	View,
	FormControl,
	Input,
	Button,
	Text,
	useToast,
	AspectRatio,
	Image,
} from "native-base";
// import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
// import Icon from "react-native-vector-icons/FontAwesome";

import nbStyles from "../style/nb-styles";

const EditProfileForm = () => {
	// 	const navigation = useNavigation();
	// 	const toast = useToast();
	return (
		<View m={5}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View {...nbStyles.editProfileUserPhoto}>
					<AspectRatio
						ratio={{
							base: 2 / 2,
							md: 2 / 2,
						}}
					>
						<Image
							source={{
								uri: "https://wallpaperaccess.com/full/317501.jpg",
							}}
							alt="Alternate Text"
							size="full"
							borderRadius={10}
						/>
					</AspectRatio>
				</View>
			</View>
			<Formik
				initialValues={{ name: "", email: "" }}
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
						<FormControl flexDirection="column">
							<Button
								width={"full"}
								rounded={"2xl"}
								p={4}
								marginY={4}
								onPress={handleSubmit}
							>
								<Text fontWeight={900} color={"#fff"}>
									Save
								</Text>
							</Button>
						</FormControl>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default memo(EditProfileForm);
