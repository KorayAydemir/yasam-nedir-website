import { createRoot } from "react-dom/client";
import App from "../app/index.js";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App state={window.__PRELOADED_STATE__} />
    </BrowserRouter>
);
