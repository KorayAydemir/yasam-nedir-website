import { useStore } from "react-redux";
import { useLiveQuery } from "@sanity/preview-kit";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useUniversalFetch = (ep: any): object | null => {
    const store = useStore();
    const [fetchedData, setFetchedData] = useState<null | object>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        store.dispatch<any>(ep.initiate()).then( (res: {data: object}) => {
            setFetchedData(res.data);
        });
    }, [ep, store]);

    const [liveData, _loading] = useLiveQuery(
        fetchedData,
        `*[_type in ["settings"]]`
    );

    return liveData;
};
