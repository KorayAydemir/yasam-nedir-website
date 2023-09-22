import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layout: {
        data: {}
    }
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {},
});

export default layoutSlice.reducer;

