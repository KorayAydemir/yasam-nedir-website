import { ClientConfig, createClient } from "@sanity/client";

export const createSanityClient = ({
    useCdn = true,
    withCredentials = false,
    ...rest
}: ClientConfig = {}) => {
    return createClient({
        projectId: "9cr46sy3",
        dataset: "production",
        apiVersion: "2023-10-21",
        useCdn,
        withCredentials,
        ...rest,
    });
};

export const clientForPreview = createSanityClient({
    useCdn: false,
    perspective: "previewDrafts",
    token: process.env.SANITY_TOKEN_LIVE_PREVIEW,
});
