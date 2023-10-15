import { defineType } from "sanity";
import { fontStyle } from "../../marks/font-style";

export const generalSettings = defineType({
    type: "object",
    title: "Genel Ayarlar",
    name: "settings",
    fields: [
        {
            name: "lineHeight",
            type: "object",
            title: "Satır Aralığı",
            options: {
                collapsible: true,
                collapsed: true,
                columns: 1,
                editModal: "popover",
            },
            fields: [
                {
                    name: "value",
                    type: "string",
                    title: "Değer",
                    options: {
                        list: [
                            { title: "1 (aralık yok)", value: "1" },
                            { title: "1.1", value: "1.1" },
                            { title: "1.2 (varsayılan)", value: "1.2" },
                            { title: "1.3", value: "1.3" },
                            { title: "1.4", value: "1.4" },
                            { title: "1.5", value: "1.5" },
                            { title: "1.6", value: "1.6" },
                            { title: "1.7", value: "1.7" },
                            { title: "1.8", value: "1.8" },
                            { title: "1.9", value: "1.9" },
                            { title: "2", value: "2" },
                        ],
                    },
                },
            ],
        },
        {
            title: "Anasayfa Paragraf",
            name: "homeContent",
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
                        annotations: [fontStyle],
                        decorators: [
                            { title: "Strong", value: "strong" },
                            { title: "Emphasis", value: "em" },
                            { title: "Underline", value: "underline" },
                            { title: "Code", value: "code" },
                            { title: "Strike", value: "strike-through" },
                        ],
                    },
                },
            ],
        },
    ],
});
