import { defineType } from "sanity";
import { indent } from "../../marks/indent";
import { fontStyle } from "../../marks/font-style";

export const textAlignment = defineType({
    name: "textAlignment",
    type: "object",
    title: "Sunum",
    preview: {
        select: {
            title: "text[0].children[0].text",
            subtitle: "alignment",
        },
        prepare(selection) {
            const { title } = selection;
            let { subtitle } = selection;
            if (subtitle === "center") {
                subtitle = "Ortalanmış";
            }
            if (subtitle === "left") {
                subtitle = "Sola dayalı";
            }
            if (subtitle === "right") {
                subtitle = "Sağa dayalı";
            }
            return {
                title: title,
                subtitle: subtitle,
            };
        },
    },
    fields: [
        {
            title: "Content",
            name: "text",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H1", value: "h1" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "Quote", value: "blockquote" },
                    ],
                    marks: {
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "URL",
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "URL",
                                    },
                                ],
                            },
                            fontStyle,
                        ],
                        decorators: [
                            { title: "Strong", value: "strong" },
                            { title: "Emphasis", value: "em" },
                            { title: "Underline", value: "underline" },
                            { title: "Code", value: "code" },
                            { title: "Strike", value: "strike-through" },
                            indent,
                        ],
                    },
                },
            ],
        },
        {
            title: "Yazı Pozisyonu",
            name: "alignment",
            type: "string",
            initialValue: "center",
            preview: { select: { title: "title", subtitle: "yo" } },
            options: {
                list: [
                    { title: "Sağ", value: "right" },
                    { title: "Sol", value: "left" },
                    { title: "Orta", value: "center" },
                ],
            },
        },
    ],
});
