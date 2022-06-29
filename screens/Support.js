import React from "react";
import { View } from "native-base";
import HeadingWithBackButton from "../components/HeadingWithBackButton";
import SupportForm from "../components/SupportForm";

export default function () {
	return (
		<View>
			<HeadingWithBackButton title="Support" />
			<SupportForm />
		</View>
	);
}
