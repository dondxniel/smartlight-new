import React from "react";
import { View } from "native-base";
import HeadingWithBackButton from "../components/HeadingWithBackButton.js";
import ChangePasswordForm from "../components/ChangePasswordForm.js";

export default function () {
	return (
		<View>
			<HeadingWithBackButton title="Change Password" />
			<ChangePasswordForm />
		</View>
	);
}
