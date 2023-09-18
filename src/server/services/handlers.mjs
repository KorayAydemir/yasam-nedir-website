import { createReactApp }   from "./react-app.mjs";
import routes               from "../router/routes.mjs";
import { matchPath }        from "react-router-dom";
import { setupStore }       from "../../store/index.mjs";

const fetchRouteData = async (path) => {
    return await routes[path]();
};

export const initialRequestHandler = async (req, res) => {
    const match = Object.keys(routes).reduce(
        (acc, route) => matchPath(req.url, route) || acc,
        null
    );

    if (!match) {
        res.status(404).send("<h1>page not found</h1>");
        return;
    }

    const serverSideProps = await fetchRouteData(match.pathname);

    const store = setupStore(serverSideProps);

    const preloadedState = store.getState();

    const { html } = createReactApp(req, store);


    res.render("index", {
        html,
        preloadedState,
    });
}
