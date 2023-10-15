import { defineArrayMember, defineType } from "sanity";
import { fontStyle } from "../../marks/font-style";
import { indent } from "../../marks/indent";

export const altBolum = defineType({
    type: "object",
    title: "Alt Bölüm",
    name: "alt_bolumler",
    preview: {
        select: {
            title: "title",
            num: "alt_bolum_no",
            media: "media",
        },
        prepare(selection) {
            const { title, num } = selection;
            return {
                title: `${title}`,
                media: <span>{num}</span>,
            };
        },
    },
    fields: [
        { type: "string", name: "title", title: "Alt Bölümün Başlığı" },

        {
            title: "Alt Bölüm Numarası",
            name: "alt_bolum_no",
            type: "number",
            validation: Rule => Rule.required().positive().lessThan(100),
        },
        {
            title: "İçerik",
            name: "content",
            type: "array",
            of: [
                defineArrayMember({ type: "latexInput" }),
                defineArrayMember({ type: "textAlignment" }),
                defineArrayMember({ type: "youtubeEmbed" }),
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
                {
                    type: "image",
                    fields: [
                        {
                            name: "width",
                            type: "number",
                            title: "Genişlik",
                            options: { isHighlighted: true },
                        },
                        {
                            name: "height",
                            type: "number",
                            title: "Yükseklik",
                            options: { isHighlighted: true },
                        },
                        {
                            name: "imgPos",
                            type: "string",
                            title: "Resim Pozisyonu",
                            initialValue: "left",
                            options: {
                                list: [
                                    { title: "Sol", value: "left" },
                                    { title: "Orta", value: "mid" },
                                    { title: "Sağ", value: "right" },
                                ],
                                isHighlighted: true,
                            },
                        },
                        {
                            name: "fit",
                            type: "string",
                            options: {
                                list: [
                                    {
                                        title: "En-Boy oranını koruma",
                                        value: "scale",
                                    },
                                    {
                                        title: "En-Boy oranını koru",
                                        value: "clip",
                                    },
                                ],
                                isHighlighted: true,
                                layout: "radio",
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
