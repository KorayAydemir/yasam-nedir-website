import { defineArrayMember, defineType } from "sanity";
import { fontStyle } from "../../marks/font-style";
import { indent } from "../../marks/indent";

export const evrimKurami = defineType({
    type: "document",
    title: "Evrim Kuramı",
    name: "evrim",
    fields: [
        { type: "string", name: "title", title: "Başlık" },
        { type: "number", name: "index", title: "Sıra" },
        {
            title: "Simge",
            type: "image",
            name: "evrim_icon",
            description: "gets scaled to 152x135",
            options: {
                hotspot: true,
            },
        },
        {
            title: "İçerik",
            name: "content",
            type: "array",
            of: [
                defineArrayMember({ type: "textAlignment" }),
                defineArrayMember({ type: "youtubeEmbed" }),
                defineArrayMember({ type: "latexInput" }),
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
