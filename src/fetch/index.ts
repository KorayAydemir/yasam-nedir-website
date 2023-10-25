import { createApi } from "@reduxjs/toolkit/query/react";
import { createClient } from "@sanity/client";

export const createSanityClient = ({
    useCdn = true,
    withCredentials = false,
}: {
    useCdn?: boolean;
    withCredentials?: boolean;
} = {}) => {
    return createClient({
        projectId: "9cr46sy3",
        dataset: "production",
        apiVersion: "2021-03-25",
        useCdn,
        withCredentials,
    });
};

const sanityClient = createSanityClient();
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

export const clientForPreview = createClient({
    projectId: "9cr46sy3",
    dataset: "production",
    apiVersion: "2023-10-21",
    useCdn: false,
    perspective: "previewDrafts",
    token: process.env.SANITY_TOKEN_LIVE_PREVIEW,
});
