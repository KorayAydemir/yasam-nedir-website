import { useStore } from "react-redux";
import { useLiveQuery } from "@sanity/preview-kit";
import { useEffect, useState } from "react";
import { endpoints } from "./endpoints";
import { getLanding } from ".";

export const useUniversalFetch = (ep: typeof getLanding): object | null => {
    const store = useStore();

    const [fetchedData, setFetchedData] = useState<null | object>(null);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        store.dispatch<any>(ep.initiate(null)).then((res: { data: object }) => {
            setFetchedData(res.data);
        });
    }, [ep, store]);

    const [liveData, _loading] = useLiveQuery(
        fetchedData,
        endpoints[ep.name].query
    );

    return liveData;
};
