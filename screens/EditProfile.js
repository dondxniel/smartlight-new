import React from "react";
import { View } from "native-base";
import HeadingWithBackButton from "../components/HeadingWithBackButton.js";
import EditProfileForm from "../components/EditProfileForm.js";

export default function () {
	return (
		<View>
			<HeadingWithBackButton title="Edit Profile" />
			<EditProfileForm />
		</View>
	);
}
