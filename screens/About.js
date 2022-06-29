import React from "react";
import { Text, View, ScrollView } from "native-base";
import HeadingWithBackButton from "../components/HeadingWithBackButton";
import nbStyles from "../style/nb-styles";

export default function () {
	return (
		<View>
			<HeadingWithBackButton title="About SmartLight" />
			<ScrollView {...nbStyles.aboutTextChunkContainer}>
				<Text {...nbStyles.aboutTextChunk}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dolorem nam asperiores molestias necessitatibus veniam eaque
					consectetur itaque incidunt voluptate, beatae quia nobis
					ducimus numquam illo odit? Explicabo quos beatae cum. Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
					nam asperiores molestias necessitatibus veniam eaque
					consectetur itaque incidunt voluptate, beatae quia nobis
					ducimus numquam illo odit? Explicabo quos beatae cum.
				</Text>
				<Text {...nbStyles.aboutTextChunk}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dolorem nam asperiores molestias necessitatibus veniam eaque
					consectetur itaque incidunt voluptate, beatae quia nobis
					ducimus numquam illo odit? Explicabo quos beatae cum. Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
					nam asperiores molestias necessitatibus veniam eaque
					consectetur itaque incidunt voluptate, beatae quia nobis
					ducimus numquam illo odit? Explicabo quos beatae cum.
				</Text>
				<Text {...nbStyles.aboutTextChunk}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dolorem nam asperiores molestias necessitatibus veniam eaque
					consectetur itaque incidunt voluptate, beatae quia nobis
					ducimus numquam illo odit? Explicabo quos beatae cum. Lorem
					ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
					nam asperiores molestias necessitatibus veniam eaque
					consectetur itaque incidunt voluptate, beatae quia nobis
					ducimus numquam illo odit? Explicabo quos beatae cum.
				</Text>
			</ScrollView>
		</View>
	);
}
