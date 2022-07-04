import React, { memo, useEffect, useState } from "react";

//navigations
import { Stack } from "./Root.stack";

//screens
import OnboardingScreen from "../../screens/Onboarding";
import LoginScreen from "../../screens/Login";
import SignupScreen from "../../screens/Signup";
import VerifyPhoneNumberScreen from "../../screens/VerifyPhoneNumber";
import ForgotPassword from "../../screens/ForgotPassword";
import Otp from "../../screens/Otp";
import NewPassword from "../../screens/NewPassword";
import { useSelector } from "react-redux";

const BoardingStack = Stack;
export default memo(function () {
  const {firstLaunch} = useSelector(state => state.launched)
	return (
		<BoardingStack.Navigator
			initialRouteName={firstLaunch ? "onboarding" : "login"}
			screenOptions={{ headerShown: false }}
		>
			{/* --- first screen --- */}
			<BoardingStack.Screen
				name='onboarding'
				component={OnboardingScreen}
			/>

			{/* --- second screen --- */}

			<BoardingStack.Screen
				options={{
					animation: "slide_from_bottom",
					statusBarAnimation: "slide",
				}}
				name='login'
				component={LoginScreen}
			/>

			{/* --- third screen --- */}

			<BoardingStack.Screen
				options={{
					animation: "slide_from_right",
					statusBarAnimation: "slide",
				}}
				name='signup'
				component={SignupScreen}
			/>

			{/* --- fourth screen --- */}

			<BoardingStack.Screen
				options={{
					animation: "slide_from_left",
				}}
				name='verifyphonenumber'
				children={(props) => <VerifyPhoneNumberScreen {...props} />}
			/>

			{/* fifth screen */}

			<BoardingStack.Screen
				options={{ animation: "slide_from_right" }}
				name='forgot_password'
				children={(props) => <ForgotPassword {...props} />}
			/>

			{/* sixth screen */}

			<BoardingStack.Screen
				options={{ animation: "slide_from_right" }}
				name='otp'
				children={(props) => <Otp {...props} />}
			/>

			{/* seventh screen */}

			<BoardingStack.Screen
				options={{ animation: "slide_from_left" }}
				name='new_password'
				children={(props) => <NewPassword {...props} />}
			/>
		</BoardingStack.Navigator>
	);
});
