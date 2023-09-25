import { createApi } from "@reduxjs/toolkit/query/react";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "9cr46sy3",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-03-25",
});

const sanityClientFetcher = (query: string) => {
    const data = sanityClient.fetch(query);
    return { data };
};

export const rtkSanityApi = createApi({
    reducerPath: "sanityApi",
    baseQuery: sanityClientFetcher,
    endpoints: build => ({
        getSettings: build.query({
            queryFn: () => sanityClientFetcher(`*[_type in ["settings"]]`),
        }),
        getLanding: build.query({
            queryFn: () => sanityClientFetcher(`*[_type in ["settings"]]`),
        }),
    }),
});

export const {
    useGetLandingQuery,
    util: { getRunningQueriesThunk },
} = rtkSanityApi;

export const { getLanding } = rtkSanityApi.endpoints;
