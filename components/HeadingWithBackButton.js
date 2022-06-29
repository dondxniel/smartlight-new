import React from "react";
import { Text, Heading, View, HStack, Button } from "native-base";
import nbStyles from "../style/nb-styles";
import { useNavigation } from "@react-navigation/native";
import MDIcon from "react-native-vector-icons/MaterialIcons";

function HeadingWithBackButton({ title }) {
	const navigation = useNavigation();

	return (
		<View {...nbStyles.headerWithBackButton.container}>
			<Button
				rounded={"lg"}
				width={50}
				bg={"trueGray.50"}
				onPress={() => navigation.goBack()}
				_pressed={{
					backgroundColor: "trueGray.50",
				}}
				{...nbStyles.headerWithBackButton.backBtn}
			>
				<MDIcon
					size={20}
					style={{ color: "black", padding: 5 }}
					name="arrow-back-ios"
				/>
			</Button>
			<View {...nbStyles.headerWithBackButton.text}>
				<Heading>{title}</Heading>
			</View>
		</View>
	);
}

export default HeadingWithBackButton;
