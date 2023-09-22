import yasamBilim from '../../app/domain/yasambilim/reducer/index.mjs';
import layout from '../../app/domain/layout/reducer/index.mjs';
import landing from '../../app/domain/landing/reducer/index.mjs';
import { rtkSanityApi } from '../../client/fetcher.mjs';

export const rootReducer = {
    yasamBilim,
    layout,
    landing,
    [rtkSanityApi.reducerPath]: rtkSanityApi.reducer
}
