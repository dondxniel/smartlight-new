/** @format */

import React, { useCallback, useRef, useState } from "react";
import {
	Actionsheet,
	Box,
	Button,
	Center,
	Heading,
	IconButton,
	Input,
	Stack,
	Text,
	useDisclose,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Icon from "react-native-vector-icons/FontAwesome5";

//context
import { usePaymentType } from "../contexts/paymentTypeContext";
//compenents
import { PaymentPrompt } from "./PaymentPrompt.js";
//nativebase styles
import nbStyles from "../style/nb-styles";
import { width } from "../constants/dims";

const PaymentComponent = ({ isOpen, onClose }) => {
	const paymentAction = useDisclose();
	const {
		state: { amount },
	} = usePaymentType();
	const [paymentPrompt, setPaymentPrompt] = useState("");
	const [visible, setVisible] = useState(false);
	const [cardNum, setCardNum] = useState(undefined);
	const [month, setMonth] = useState(undefined);
	const [year, setYear] = useState(undefined);
	const [cvv, setCVV] = useState(undefined);

	const monthRef = useRef(null);
	const yearRef = useRef(null);
	const cvvRef = useRef(null);

	const handleMonthChange = useCallback(
		(val) => {
			let mth = parseInt(val);
			setMonth(() => mth);
			if (mth > 0 && mth <= 12 && val.length === 2)
				yearRef.current.focus();
			else if (val.length === 2) alert("Card month is invalid");
		},
		[month]
	);
	const handleYearChange = useCallback(
		(val) => {
			let yr = parseInt(val);
			const yearExtend = parseInt(
				(new Date().getUTCFullYear() + 4).toString().slice(2)
			);
			const currentYear = yearExtend - 4;
			console.log(yearExtend);
			setYear(() => yr);
			if (currentYear <= yr && yr <= yearExtend && val.length === 2)
				cvvRef.current.focus();
			else if (val.length === 2) alert("Card year is invalid");
		},
		[year]
	);
	const handleCVVChange = useCallback(
		(val) => {
			setCVV(() => val);
		},
		[cvv]
	);

	const handlePayment = () => {
		onClose();
		if (!true) {
			setPaymentPrompt("successful");
		} else {
			setPaymentPrompt("unsuccesful");
		}
		paymentAction.onOpen();
	};

	return (
		<KeyboardAwareScrollView>
			<Actionsheet isOpen={isOpen} onClose={onClose}>
				<Actionsheet.Content
					{...nbStyles.actionSheet.actionSheetContent}
				>
					<Actionsheet.Item
						mt={-2}
						{...nbStyles.actionSheet.actionSheetItem}
					>
						<Heading>Card Payment</Heading>
						<Text mt={2}>
							A sum of{" "}
							<Text fontWeight={500}>N{amount && amount}</Text>{" "}
							would be deducted from your account
						</Text>
					</Actionsheet.Item>
					<Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
						<Text color={"#212121"}>Card number</Text>
						<Box width={width - 50}>
							<Input
								p={2.5}
								_focus={{ fontWeight: 500 }}
								bgColor={"#fafafa"}
								borderWidth={0}
								size={"md"}
								rounded={"2xl"}
								keyboardType='numeric'
								maxLength={19}
								letterSpacing={2}
								placeholder={"1330 0000 0000 0000"}
								value={cardNum}
								onChangeText={(val) => setCardNum(val)}
								rightElement={
									cardNum && (
										<Center mt={1}>
											<IconButton
												variant={"unstyled"}
												onPress={() => setCardNum("")}
												children={<Icon name='times' />}
											/>
										</Center>
									)
								}
							/>
						</Box>
					</Actionsheet.Item>
					<Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
						<Stack
							width={width - 50}
							justifyContent={"space-around"}
							flexDir={"row"}
						>
							<Box>
								<Text color={"#212121"}>Expiry date</Text>
								<Stack
									flexDir={"row"}
									bgColor={"#fafafa"}
									alignItems={"center"}
									p={1}
									rounded={"2xl"}
								>
									<Input
										w={16}
										variant={"unstyled"}
										size={"md"}
										letterSpacing={2}
										ref={monthRef}
										keyboardType='numeric'
										returnKeyType='next'
										value={month}
										placeholder='MM'
										onChangeText={handleMonthChange}
										maxLength={2}
										clearTextOnFocus={true}
										fontWeight={500}
										color={"#212121"}
									/>
									<Text
										color={"#212121"}
										fontSize={"xl"}
										fontWeight={500}
									>
										/
									</Text>

									<Input
										w={16}
										variant={"unstyled"}
										size={"md"}
										letterSpacing={2}
										ref={yearRef}
										keyboardType='numeric'
										returnKeyType='next'
										value={year}
										placeholder='YY'
										onChangeText={handleYearChange}
										maxLength={2}
										clearTextOnFocus={true}
										fontWeight={500}
										color={"#212121"}
									/>
								</Stack>
							</Box>
							<Box>
								<Text color={"#212121"}>CVV</Text>
								<Input
									p={3}
									w={100}
									variant={"unstyled"}
									size={"md"}
									letterSpacing={2}
									ref={cvvRef}
									keyboardType='numeric'
									returnKeyType='default'
									value={cvv}
									placeholder={"_ _ _"}
									onChangeText={handleCVVChange}
									type={visible ? "text" : "password"}
									rightElement={
										cvv && (
											<Center mt={1}>
												<IconButton
													variant={"unstyled"}
													onPress={() =>
														setVisible(
															(prev) => !prev
														)
													}
													children={
														<Icon
															size={10}
															name={
																visible
																	? "eye-slash"
																	: "eye"
															}
														/>
													}
												/>
											</Center>
										)
									}
									maxLength={3}
									clearTextOnFocus={true}
									borderWidth={0}
									rounded={"2xl"}
									bgColor={"#fafafa"}
									fontWeight={500}
									color={"#212121"}
								/>
							</Box>
						</Stack>
					</Actionsheet.Item>
					<Actionsheet.Item {...nbStyles.actionSheet.actionSheetItem}>
						<Text>Cardholder name</Text>
						<Box
							width={width - 50}
							rounded={"2xl"}
							bgColor={"#fafafa"}
						>
							<Heading size={"lg"} p={3}>
								Brown Lemonchiffon
							</Heading>
						</Box>
						<Button
							_text={{ fontWeight: 500 }}
							p={4}
							colorScheme={"primary"}
							width={"full"}
							rounded={"2xl"}
							onPress={handlePayment}
						>
							Proceed
						</Button>
					</Actionsheet.Item>
				</Actionsheet.Content>
			</Actionsheet>
			<PaymentPrompt
				prompt={paymentPrompt}
				isOpen={paymentAction.isOpen}
				onClose={paymentAction.onClose}
			/>
		</KeyboardAwareScrollView>
	);
};

export const CardPayment = React.memo(PaymentComponent);
