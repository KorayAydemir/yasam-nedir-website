import App from "../app/index.mjs";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";

export const Client = () => {
    const domNode = document.getElementById("root");
    console.log('aaa')
    
    hydrateRoot(
        domNode,
        <BrowserRouter>
            <App serverSideProps={window.__SERVER_SIDE_PROPS__} />
        </BrowserRouter>
    );
}
Client();
