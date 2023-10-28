import { createApi } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";
import { createSanityClient } from "../sanity/clients";
import { EndpointBuilderType, QueryDefForRtk } from "./rtkSanityApi.types";

const sanityClient = createSanityClient();

const sanityClientFetcher = (query: string) => {
    const data = sanityClient.fetch(query);
    return { data };
};

const sanityBaseQuery = async ({ query }: { query: string }) => {
    try {
        const result = sanityClientFetcher(query);
        return { data: result.data };
    } catch (sanityError) {
        return { error: sanityError };
    }
};

const endpointsBuilder = (build: EndpointBuilderType) => {
    const definedEndpoints = Object.entries(endpoints);

    const endpointsForRtk: Record<string, QueryDefForRtk> = {};
    for (const [epName, value] of definedEndpoints) {
        const builtQueryForEp = build.query({
            query: () => ({ query: value.query }),
        });

        endpointsForRtk[epName] = builtQueryForEp;
    }

    return endpointsForRtk;
};

export const rtkSanityApi = createApi({
    reducerPath: "sanityApi",
    baseQuery: sanityBaseQuery,
    endpoints: endpointsBuilder,
});

export const {
    util: { getRunningQueriesThunk },
} = rtkSanityApi;
