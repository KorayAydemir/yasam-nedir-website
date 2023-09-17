import { renderToString }   from "react-dom/server";

import App                  from "../../app/index.mjs";
import { routes }           from "./routes.mjs";

import { matchPath }        from "react-router-dom";
import { StaticRouter }     from "react-router-dom/server.js";
import { Provider }             from "react-redux";
import { setupStore } from "../../store/index.mjs";

const fetchRouteData = (path) => {
    return routes[path]();
};

const handleRender = () =>{
}


export default function router(req, res) {
    const match = Object.keys(routes).reduce(
        (acc, route) => matchPath(req.url, route) || acc,
        null
    );

    if (!match) {
        res.status(404).send("<h1>page not found</h1>");
        return;
    }

    const serverSideProps = fetchRouteData(match.pathname);

    const store = setupStore(serverSideProps);

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const preloadedState = store.getState();

    res.render("index", {
        html,
        preloadedState,
    });
}
