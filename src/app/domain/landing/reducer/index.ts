import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
};

const landingSlice = createSlice({
    name: "landing",
    initialState,
    reducers: {},
});

//export const { yasambilimLoading } = yasambilimSlice.actions;

export default landingSlice.reducer;
