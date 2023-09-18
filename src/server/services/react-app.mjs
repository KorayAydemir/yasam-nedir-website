import { StaticRouter }     from "react-router-dom/server.js";
import { Provider }         from "react-redux";
import { renderToString }   from "react-dom/server";
import App                  from "../../app/index.mjs";


export const createReactApp = async (req, store) => {
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    );

    return {
        html
    };
}
