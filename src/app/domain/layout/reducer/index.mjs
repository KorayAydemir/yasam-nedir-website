import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layout: {}
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {},
});

export default layoutSlice.reducer;

