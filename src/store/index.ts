import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/index'; 
import { rtkSanityApi } from '../fetch/index'
    
export const setupStore = (preloadedState, composeEnhancers) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkSanityApi.middleware),
    });
}
