import {renderToString} from "react-dom/server";
import { routes } from "./routes.js";
//import { matchPath, StaticRouter } from "react-router-dom";
import react_router from "react-router-dom"
const { matchPath, StaticRouter } = react_router

import path from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const indexPath = path.join(__dirname, "../../build/views/index.ejs")

export default function router(req, res) {
    console.log('routes',routes)
    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
    console.log(match); 

    if (!match) {
        res.status(404).send("<h1>page not found</h1>")
        return;
    }

    const context = {}

    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )

    res.status(200).send(html)
}
