import express, { Router } from "express";
import appControllers from "../api/controller/index";
import { initialRequestHandler } from "../services/handlers";

const expressRouter: Router = express.Router();

appControllers(expressRouter);

expressRouter.get("*", (req, res) => {
    try {
        initialRequestHandler(req, res);
    } catch (e) {
        console.error(e, "Couldn't handle the initial request.");
    }
});

export default expressRouter;
