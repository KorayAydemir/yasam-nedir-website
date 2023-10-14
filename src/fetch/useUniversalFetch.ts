import { useStore } from "react-redux";
import { getLanding } from "./index";

export const useUniversalFetch = (): object => {
    // todo: something like if (typeof window !== "undefined") useGetLandingQuery;
    const store = useStore();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = store.dispatch<any>(getLanding.initiate(""));

    //const { data, error, isLoading } = useGetLandingQuery();

    return { data /*error, isLoading*/ };
};
