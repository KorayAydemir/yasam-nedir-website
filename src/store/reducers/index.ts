import yasamBilim from "../../app/domain/yasambilim/reducer/index";
import layout from "../../app/domain/layout/reducer/index";
import landing from "../../app/domain/landing/reducer/index";
import { rtkSanityApi } from "../../fetch/rtkSanityApi";

export const rootReducer = {
    yasamBilim,
    layout,
    landing,
    [rtkSanityApi.reducerPath]: rtkSanityApi.reducer,
};
