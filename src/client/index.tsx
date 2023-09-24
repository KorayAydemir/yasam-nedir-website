import App from "../app/index";
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { setupStore } from "../store/index";

declare global {
    interface Window {
        __PRELOADED_STATE__?: object;
    }
}
(() => {
    const domNode = document.getElementById("root") as HTMLElement;

    const store = setupStore(window.__PRELOADED_STATE__);
    delete window.__PRELOADED_STATE__;

    hydrateRoot(
        domNode,
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
})();
