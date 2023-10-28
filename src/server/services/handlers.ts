import { createReactApp } from "./react-app";
import { setupStore } from "../../store/index";
import { Request, Response } from "express";
import {
    AnyAsyncThunk,
    PendingActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";
import { getRunningQueriesThunk } from "../../fetch/rtkSanityApi";

export const initialRequestHandler = async (req: Request, res: Response) => {
    const store = setupStore();

    const html = await createReactApp(req, store);

    const serverData = await Promise.all(
        store.dispatch<PendingActionFromAsyncThunk<AnyAsyncThunk>>(
            getRunningQueriesThunk()
        )
    );
    console.log("==== SERVER DATA ====\n", serverData, "\n=====");

    const preloadedState = store.getState();

    res.render("index", {
        html,
        preloadedState,
    });
};
