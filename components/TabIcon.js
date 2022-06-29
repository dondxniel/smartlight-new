import React, { memo, useState } from "react";
import { Center, Pressable, Stack, useDisclose, View } from "native-base";

//icons
import Icon from "react-native-vector-icons/Entypo";
//components
import BuyMeter from "./BuyMeter.js";

//context
import { PaymentTypeProvider } from "../contexts/paymentTypeContext.js";

export const MeterTabIcon = memo(() => {
	const { isOpen, onClose, onOpen } = useDisclose();

	return (
		<View flex={1}>
			<Pressable onPress={onOpen}>
				<Center mt={"-8"}>
					<Stack
						bg={"primary.100"}
						rounded={"full"}
						height={"55"}
						width={"55"}
						shadow={9}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Icon name="squared-plus" size={30} color={"white"} />
					</Stack>
				</Center>
			</Pressable>
			<PaymentTypeProvider>
				<BuyMeter isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
			</PaymentTypeProvider>
		</View>
	);

});
