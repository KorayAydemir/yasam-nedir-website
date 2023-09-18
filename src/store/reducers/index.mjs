import yasamBilim from '../../app/domain/yasambilim/reducer/index.mjs';
import layout from '../../app/domain/layout/reducer/index.mjs';
//import { fetchApi } from '../../server/api/fetch.mjs';

export const rootReducer = {
    yasamBilim,
    layout,
    //[fetchApi.reducerPath]: fetchApi.reducer
}
