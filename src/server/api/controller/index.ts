import { Router } from "express";
import * as Resources from "./resources/index";

export default (router: Router) => {
    Resources.Landing(router);
};
