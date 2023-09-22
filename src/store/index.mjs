import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index.mjs'; 
import { rtkSanityApi } from '../client/fetcher.mjs'
    
export const setupStore = (preloadedState, composeEnhancers) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkSanityApi.middleware),
    });
}
