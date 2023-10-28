import { defineType } from "sanity";
import getYouTubeId from "get-youtube-id";
import { ComponentType, ReactNode } from "react";
import { PreviewProps } from "sanity";

interface YoutubePreviewProps extends PreviewProps {
    url: string;
}

const Preview: ComponentType<YoutubePreviewProps> = (
    props: YoutubePreviewProps
): ReactNode => {
    const { url } = props;
    const id = getYouTubeId(url);
    const formattedUrl = `https://www.youtube.com/embed/${id}`;
    if (!id) {
        return <div>Missing YouTube URL</div>;
    }
    return (
        <iframe
            title="YouTube Preview"
            width="100%"
            height="315"
            src={formattedUrl}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
    );
};

export const youtubeEmbed = defineType({
    name: "youtubeEmbed",
    type: "object",
    title: "Gömülü Youtube Video",
    fields: [
        {
            name: "url",
            type: "url",
            title: "YouTube Video Bağlantısı",
        },
    ],
    preview: {
        select: {
            url: "url",
        },
    },
    components: {
        preview: Preview as ComponentType<PreviewProps>,
    },
});
