import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    yasambilim: {
        yasambilim: [],
        yasambilimLoading: false,
        yasambilimError: null,
    },
};

const yasambilimSlice = createSlice({
    name: "yasambilim",
    initialState,
    reducers: {
        yasambilimLoading: state => {
            state.yasambilim.yasambilimLoading = true;
        },
        yasambilimSuccess: (state, action) => {
            state.yasambilim.yasambilimLoading = false;
            state.yasambilim.yasambilim = action.payload;
        },
        yasambilimError: (state, action) => {
            state.yasambilim.yasambilimLoading = false;
            state.yasambilim.yasambilimError = action.payload;
        },
    },
});

export const { yasambilimLoading, yasambilimSuccess, yasambilimError } =
    yasambilimSlice.actions;

export default yasambilimSlice.reducer;
