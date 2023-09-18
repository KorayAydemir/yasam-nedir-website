import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index.mjs'; 

export const setupStore = (preloadedState, composeEnhancers) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware),
    });
}


