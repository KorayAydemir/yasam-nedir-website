import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../store";

export const AllProviders = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const store = setupStore({});
    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
};
