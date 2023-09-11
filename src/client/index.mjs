import App from "../app/index.mjs";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";

(() => {
    const domNode = document.getElementById("root");

    hydrateRoot(
        domNode,
        <BrowserRouter>
            <App serverSideProps={window.__SERVER_SIDE_PROPS__} />
        </BrowserRouter>
    );
})();
