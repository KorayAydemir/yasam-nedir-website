import { createClient } from "@sanity/client"

export const sanityClient = createClient({
    projectId: "9cr46sy3",
    dataset: "production",
    useCdn: true,
    apiVersion: '2021-03-25',
});
