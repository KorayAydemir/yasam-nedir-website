import { Store, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import { rtkSanityApi } from "../fetch/rtkSanityApi";

export const setupStore = (preloadedState?: object): Store => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(rtkSanityApi.middleware),
    });
};
