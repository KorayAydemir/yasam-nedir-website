//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react.esm.js";
import { createClient } from "@sanity/client"

export const sanityApi = createClient({
    projectId: "9cr46sy3",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-03-25', 
});

    //try {
    //    const response = await fetch(url);

    //    if (!response.ok) {
    //        throw new Error(`Fetch failed with status ${response.status}`);
    //    }

    //    const data = await response.json();
    //    return data;
    //} catch (error) {
    //    throw error;
    //}
