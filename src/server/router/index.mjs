import { renderToString }   from "react-dom/server";

import App                  from "../../app/index.mjs";
import { routes }           from "./routes.mjs";

import { matchPath }        from "react-router-dom";
import { StaticRouter }     from "react-router-dom/server.js";

const fetchRouteData = (path) => {
    return routes[path]();
};

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

    const html = renderToString(
        <StaticRouter location={req.url}>
            <App serverSideProps={serverSideProps} />
        </StaticRouter>
    );
    res.render("index", {
        html,
        serverSideProps,
    });
}
