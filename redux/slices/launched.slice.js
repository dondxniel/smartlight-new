import { createSlice } from "@reduxjs/toolkit";

const launchedSlice = createSlice({
	name: "first_launch",
	initialState: { firstLaunch: true },
	reducers: {
		hideOnboarding: (state) => {
			state.firstLaunch = false;
		},
	},
});

export const { hideOnboarding } = launchedSlice.actions;
const launchedReducer = launchedSlice.reducer;
export default launchedReducer;
