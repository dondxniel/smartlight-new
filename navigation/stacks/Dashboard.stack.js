import React from "react";

// navigation
import { Stack } from "./Root.stack";

//components
import DashboardScreen from "../../screens/Dashboard";

export default function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="dashboard"
        children={(props) => <DashboardScreen {...props} />}
      />
    </Stack.Navigator>
  );
}
