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
import Icon from "react-native-vector-icons/FontAwesome";

import nbStyles from "../style/nb-styles";

const ChangePasswordForm = () => {
	// 	const navigation = useNavigation();
	// 	const toast = useToast();
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	return (
		<View m={5}>
			<Formik
				initialValues={{
					oldPassword: "",
					newPassword: "",
				}}
				onSubmit={(values) => {
					if (true) {
						navigation.push("_dashboard");
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
					<View>
						<FormControl>
							<Input
								{...nbStyles.inputStyle}
								type={showOldPassword ? "text" : "password"}
								placeholder="Old Password"
								onChangeText={handleChange("oldPassword")}
								value={values.oldPassword}
								variant="rounded"
								InputRightElement={
									<Icon
										onPress={() =>
											setShowOldPassword(!showOldPassword)
										}
										style={{ marginRight: 15 }}
										name={
											showOldPassword
												? "eye-slash"
												: "eye"
										}
										size={20}
										color={"#bbb"}
									/>
								}
							/>
							<Text>
								{errors.oldPassword && touched.oldPassword}
							</Text>
						</FormControl>
						<FormControl>
							<Input
								{...nbStyles.inputStyle}
								type={showNewPassword ? "text" : "password"}
								placeholder="New Password"
								onChangeText={handleChange("newPassword")}
								value={values.newPassword}
								variant="rounded"
								InputRightElement={
									<Icon
										onPress={() =>
											setShowNewPassword(!showNewPassword)
										}
										style={{ marginRight: 15 }}
										name={
											showNewPassword
												? "eye-slash"
												: "eye"
										}
										size={20}
										color={"#bbb"}
									/>
								}
							/>
							<Text>
								{errors.newPassword && touched.newPassword}
							</Text>
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
									Change
								</Text>
							</Button>
						</FormControl>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default memo(ChangePasswordForm);
