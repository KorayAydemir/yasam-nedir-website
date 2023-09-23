import { useStore } from "react-redux";
import { useGetLandingQuery, getLanding } from "./index";

export const useUniversalFetch = (url, options) => {
    const store = useStore();
    const data = store.dispatch(getLanding.initiate()) 

    //const { data, error, isLoading } = useGetLandingQuery(); 

    return { data, /*error, isLoading*/ };
}
