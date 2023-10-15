import { PreviewComponent, PreviewProps, defineType } from "sanity";
import KaTeX from "katex";
import "./index.css";

interface LatexPreviewProps extends PreviewProps {
    content: string;
}

const LatexPreview = (props: LatexPreviewProps): JSX.Element => {
    const latexHtml = KaTeX.renderToString(props.content || "", {
        throwOnError: false,
    });

    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: latexHtml }} />
        </>
    );
};

export const latexInput = defineType({
    type: "object",
    name: "latexInput",
    fields: [
        {
            title: "LaTeX content",
            name: "content",
            type: "text",
        },
        {
            name: "settings",
            type: "object",
            title: "Ayarlar",
            options: {
                collapsible: true,
                collapsed: true,
                columns: 1,
                editModal: "popover",
            },
            fields: [
                {
                    title: "Yazı Pozisyonu",
                    name: "alignment",
                    type: "string",
                    initialValue: "left",
                    preview: { select: { title: "title", subtitle: "yo" } },
                    options: {
                        collapsible: true,
                        collapsed: true,
                        editModal: "dialog",
                        columns: 1,
                        list: [
                            { title: "Sağ", value: "right" },
                            { title: "Sol", value: "left" },
                            { title: "Orta", value: "center" },
                        ],
                    },
                },
                {
                    title: "Boyut",
                    name: "fontSize",
                    type: "string",
                    initialValue: "18",
                },
                {
                    title: "Satır Türü",
                    name: "line",
                    type: "string",
                    options: {
                        list: [
                            { title: "Yeni satır", value: "newline" },
                            { title: "Satır içi", value: "inline" },
                        ],
                        layout: "radio",
                        direction: "vertical",
                    },
                },
            ],
        },
    ],
    components: {
        preview: LatexPreview as PreviewComponent,
    },
    preview: {
        select: {
            content: "content",
        },
    },
});
