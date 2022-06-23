import React, { memo } from "react";

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

const BoardingStack = Stack;
export default memo(function () {
  return (
    <BoardingStack.Navigator screenOptions={{ headerShown: false }}>
      {/* --- first screen --- */}
      <BoardingStack.Screen
        name="onboarding"
        children={(props) => <OnboardingScreen {...props} />}
      />

      {/* --- second screen --- */}

      <BoardingStack.Screen
        options={{
          animation: "slide_from_bottom",
          statusBarAnimation: "slide",
        }}
        name="login"
        component={LoginScreen}
      />

      {/* --- third screen --- */}

      <BoardingStack.Screen
        options={{
          animation: "slide_from_right",
          statusBarAnimation: "slide",
        }}
        name="signup"
        component={SignupScreen}
      />

      {/* --- fourth screen --- */}

      <BoardingStack.Screen
        options={{
          animation: "slide_from_left",
        }}
        name="verifyphonenumber"
        children={(props) => <VerifyPhoneNumberScreen {...props} />}
      />

      {/* fifth screen */}

      <BoardingStack.Screen
        options={{ animation: "slide_from_right" }}
        name="forgot_password"
        children={(props) => <ForgotPassword {...props} />}
      />

      {/* sixth screen */}

      <BoardingStack.Screen
        options={{ animation: "slide_from_right" }}
        name="otp"
        children={(props) => <Otp {...props} />}
      />

      {/* seventh screen */}

      <BoardingStack.Screen
        options={{ animation: "slide_from_left" }}
        name="new_password"
        children={(props) => <NewPassword {...props} />}
      />
    </BoardingStack.Navigator>
  );
});
