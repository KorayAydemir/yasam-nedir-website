import { createReactApp }   from "./react-app.mjs";
import routes               from "../router/routes.mjs";
import { matchPath }        from "react-router-dom";
import { setupStore }       from "../../store/index.mjs";
import { getLanding, getRunningQueriesThunk } from "../../fetch/index.mjs";

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

    const serverSideProps = await fetchRouteData(match.pathname); //not useful anymore 

    const store = setupStore(serverSideProps);

    const html = await createReactApp(req, store);

    const serverData = await Promise.all(store.dispatch(getRunningQueriesThunk()));
    
    console.log('=== server data ===', serverData)

    const preloadedState = store.getState();

    res.render("index", {
        html,
        preloadedState,
    });
}
