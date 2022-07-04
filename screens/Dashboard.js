
import React, { memo, useCallback, useState } from "react";
import { ScrollView } from "react-native";
import {
	Text,
	HStack,
	Box,
	Image,
	Button,
	useDisclose,
	StatusBar,
} from "native-base";
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

//constants
import { width } from "../constants/dims";

//icons
import DashboardLineChartHeader from "../components/DashboardLineChartHeader";
import MeterInfo from "../components/MeterInfo";
import AddMeterButton from "../components/AddMeterButton";

import powerIcon from "../assets/avatar.png";

//mocks
import { linedata } from "../mocks/";
import AddMeterPrompt from "../components/AddMeterPrompt";
import { useSelector } from "react-redux";

export default memo(function () {
	const navigation = useNavigation();
	const [focusedVal, setFocusVal] = useState(0);
	const { isOpen, onClose, onOpen } = useDisclose();

	const { firstLaunch } = useSelector((state) => state.launched);
	console.log(firstLaunch);

	const handleFocusPoint = useCallback((val) => {
		setFocusVal(val.value.toFixed(2));
	}, []);

	return (
		<ScrollView
			bounces
			contentContainerStyle={{
				paddingHorizontal: 15,
			}}
		>
			<StatusBar translucent={false} barStyle={"dark-content"} />
			<HStack space={"sm"} my={2}>
				<Text fontSize={"2xl"} letterSpacing={0.81}>
					Welcome,
				</Text>
				<Text
					fontWeight={"black"}
					fontSize={"2xl"}
					letterSpacing={0.81}
				>
					Abijah
				</Text>
			</HStack>
			<HStack my={2} space={"sm"}>
				<MeterInfo
					onPress={() => navigation.navigate("meter-info")}
					key={"metercard"}
					avatar={<Image alt={"avatar"} source={powerIcon} />}
					meterName={"Chinebere Emmanuel"}
					meterValue={"245.54"}
					meterNo={"37144433351"}
					meterInfo={"U/Sunday Kaduna"}
				/>

				<AddMeterButton onPress={onOpen} />
			</HStack>
			<AddMeterPrompt size={"xl"} isOpen={isOpen} onClose={onClose} />
			<Box my={2} rounded={"2xl"} background={"white"}>
				<DashboardLineChartHeader
					key={"linechart header"}
					focusValue={focusedVal}
				/>
				<LineChart
					bezier
					transparent
					fromZero
					withShadow={false}
					withVerticalLines={false}
					height={300}
					segments={5}
					xLabelsOffset={10}
					data={linedata}
					width={width - 50}
					onDataPointClick={handleFocusPoint}
					chartConfig={{
						strokeWidth: 4,
						color: () => `#4a60ddaa`,
						backgroundGradientFrom: "#5d6594aa",
						backgroundGradientTo: "#626db3",
						labelColor: () => `#181818`,
						style: {
							borderRadius: 16,
						},
					}}
				/>
			</Box>
			<Button
				disabled={true}
				_disabled={{
					opacity: 0.5,
				}}
				p={4}
				bgColor={"blue.200"}
				rounded={"2xl"}
			>
				<HStack alignItems={"center"}>
					<Text
						fontWeight={"semibold"}
						fontSize={"md"}
						color={"white"}
					>
						Borrow Unit
					</Text>
					<Text color={"white"}>Coming soon</Text>
				</HStack>
			</Button>
		</ScrollView>
	);
});
