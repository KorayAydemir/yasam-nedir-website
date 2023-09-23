import { StaticRouter }     from "react-router-dom/server.js";
import { Provider }         from "react-redux";
import { renderToString }   from "react-dom/server";
import App                  from "../../app/index";
import { Store } from "@reduxjs/toolkit";
import { Request } from "express";

export const createReactApp = async (req: Request, store: Store) => {
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    );

    return html
}
