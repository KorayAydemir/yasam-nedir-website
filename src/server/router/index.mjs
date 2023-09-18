import express                   from "express"
import appControllers            from "../api/controller/index.mjs"
import { initialRequestHandler } from "../services/handlers.mjs"

const expressRouter = express.Router();

appControllers(expressRouter)

expressRouter.get('*', (req, res) => {
    try {
        initialRequestHandler(req, res)
    } catch(e) {
        console.error(
            e,
            "Couldn't handle the initial request."
        )
    }
})

export default expressRouter
