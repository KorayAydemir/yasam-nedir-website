import { createReactApp } from "./react-app";
import routes from "../router/routes";
import { matchPath } from "react-router-dom";
import { setupStore } from "../../store/index";
import { getRunningQueriesThunk } from "../../fetch/index";
import { Request, Response } from "express";
import {
    AnyAsyncThunk,
    PendingActionFromAsyncThunk,
} from "@reduxjs/toolkit/dist/matchers";

/*const fetchRouteData = async (path) => {
    return await routes[path]();
};*/

export const initialRequestHandler = async (req: Request, res: Response) => {
    /*const match = Object.keys(routes).reduce(
        (acc, route) => matchPath(req.url, route) || acc,
        null
    );*/

    /*if (!match) {
        res.status(404).send("<h1>page not found</h1>");
        return;
    }*/

    //const serverSideProps = await fetchRouteData(match.pathname); //not useful anymore

    const store = setupStore();

    const html = await createReactApp(req, store);

    const serverData = await Promise.all(
        store.dispatch<PendingActionFromAsyncThunk<AnyAsyncThunk>>(
            getRunningQueriesThunk()
        )
    );

    const preloadedState = store.getState();

    res.render("index", {
        html,
        preloadedState,
    });
};
