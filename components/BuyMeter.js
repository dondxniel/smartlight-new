import React, { memo, useCallback, useMemo, useState } from "react";
import {
	Actionsheet,
	Box,
	Button,
	FlatList,
	Heading,
	HStack,
	IconButton,
	Input,
	ScrollView,
	Text,
	useDisclose,
} from "native-base";

//contexts
import { usePaymentType } from "../contexts/paymentTypeContext";

//mock data
import { meters } from "../mocks/";

//icons
import NairaIcon from "../assets/naira-green.svg";

//styles
import nbStyles from "../style/nb-styles";
import { width } from "../constants/dims";

//components
import { MeterCard } from "./MeterCard";
import ProceedActions from "./ProceedActions";
import AddMeterButton from "./AddMeterButton";
import AddMeterPrompt from "./AddMeterPrompt";

const BuyMeter = ({ isOpen, onClose }) => {
	const paymentBtnAction = useDisclose();
	const addMeterAction = useDisclose();
	const [inputAmount, setInputAmount] = useState("");
	const [kwh, setKWH] = useState(0);
	const [selectedMeterIndex, setSelectedMeterIndex] = useState(null);
	const { dispatch } = usePaymentType();

	const handlePaymentActions = useCallback(() => {
		let amount = inputAmount && parseFloat(inputAmount); // convert to a number
		if (amount && amount >= 500) {
			onClose();
			dispatch({ type: "METER_AMOUNT", payload: amount });
			paymentBtnAction.onOpen();
			setInputAmount("");
			setKWH(0);
		}
		return;
	}, [inputAmount, kwh]);

	const handleAddMeter = useCallback(() => {
		onClose();
		addMeterAction.onOpen();
	}, []);

	const handleChangeText = useCallback(
		//handle unwanted update
		(val) => {
			let amount = val && parseFloat(val); // convert to a number
			const kwh = 55.65;
			/*
    1kwh === N55.65
    xkwh === amount
     */
			let EQUIVALENT_KWH_ = amount / kwh;
			setKWH(() => EQUIVALENT_KWH_);
			setInputAmount(() => val);
		},
		[inputAmount, kwh]
	);

	const renderItem = useCallback(
		({ item: { address, meter_no, name }, index }) => {
			let isSelected = index + 1 === selectedMeterIndex ? true : false;
			return (
				<MeterCard
					onPress={() => setSelectedMeterIndex(index + 1)}
					isSelected={isSelected}
					address={address}
					meter_no={meter_no}
					name={name}
					AddMeterComponent={
						index === meters.length - 1 && (
							<AddMeterButton onPress={handleAddMeter} />
						)
					}
				/>
			);
		},
		[selectedMeterIndex]
	);

	return (
		<Box>
			<Actionsheet isOpen={isOpen} onClose={onClose}>
				<Actionsheet.Content bg={"white"}>
					<ScrollView>
						<Actionsheet.Item
							bg={"white"}
							{...nbStyles.actionSheet.actionSheetItem}
						>
							<Heading>Buy Units</Heading>
							<Text mt={2}>Select Meter</Text>
						</Actionsheet.Item>
						<Actionsheet.Item
							mt={-5}
							bg={"white"}
							{...nbStyles.actionSheet.actionSheetItem}
						>
							<FlatList
								horizontal
								contentOffset={{ x: 10, y: 10 }}
								data={meters}
								keyExtractor={(_, id) => id.toString()}
								renderItem={renderItem}
								extraData={selectedMeterIndex}
							/>
						</Actionsheet.Item>
						<Actionsheet.Item
							bg={"white"}
							{...nbStyles.actionSheet.actionSheetItem}
						>
							<Text mt={-3}>Enter Amount</Text>

							<Input
								onChangeText={handleChangeText}
								value={inputAmount}
								keyboardType={"numeric"}
								mt={2}
								backgroundColor={"#fafafa"}
								size={"sm"}
								borderWidth={0}
								rounded={"2xl"}
								width={width - 50}
								placeholder='500'
								clearTextOnFocus={true}
								leftElement={
									<IconButton
										ml={2}
										rounded={15}
										bg={"#52DDA8"}
									>
										<NairaIcon height={20} width={20} />
									</IconButton>
								}
							/>
							<Text mt={2}>Expected Unit</Text>
							<HStack
								alignItems={"center"}
								mt={2}
								p={3}
								bg={"#fafafa"}
								rounded={"2xl"}
							>
								<Text fontSize={"lg"} fontWeight={700}>
									{kwh.toFixed(2)}
								</Text>

								<Text fontSize={"md"}> kwh</Text>
							</HStack>
						</Actionsheet.Item>
						<Actionsheet.Item
							bg={"white"}
							{...nbStyles.actionSheet.actionSheetItem}
						>
							<HStack mt={-5} pb={2}>
								<Text>Additional</Text>
								<Text fontWeight={500}> N100 </Text>
								<Text>will be charged on purchase</Text>
							</HStack>
							<Button
								disabled={
									parseFloat(inputAmount) < 500 ||
									!selectedMeterIndex
								}
								onPress={handlePaymentActions}
								p={4}
								{...nbStyles.logoutBtn}
								width={width - 50}
								bg={
									parseFloat(inputAmount) < 500 ||
									!selectedMeterIndex 
										? "primary.200"
										: "primary.700"
								}
							>
								Proceed
							</Button>
						</Actionsheet.Item>
					</ScrollView>
				</Actionsheet.Content>
			</Actionsheet>
			<ProceedActions proceedActions={paymentBtnAction} />
			<AddMeterPrompt
				isOpen={addMeterAction.isOpen}
				onClose={addMeterAction.onClose}
			/>
		</Box>
	);
};

export default memo(BuyMeter);
