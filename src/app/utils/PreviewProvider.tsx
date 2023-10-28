import LiveQueryProvider from "@sanity/preview-kit";
import { clientForPreview } from "../../sanity/clients";

const PreviewProvider = ({ children }: React.PropsWithChildren) => {
    const previewMode = process.env.SANITY_PREVIEW_ENABLED === "true";

    return !previewMode ? (
        children
    ) : (
        <LiveQueryProvider
            cache={{ includeTypes: ["settings"] }}
            logger={console}
            client={clientForPreview}
            token={process.env.SANITY_TOKEN_LIVE_PREVIEW}
            refreshInterval={1000 * 60}>
            {children}
        </LiveQueryProvider>
    );
};

export default PreviewProvider;
