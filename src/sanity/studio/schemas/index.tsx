import { SchemaTypeDefinition, defineArrayMember } from "sanity";
import { indent } from "./marks/indent";
import { fontStyle } from "./marks/font-style";

export const schemaTypes: SchemaTypeDefinition[] = [
    {
        type: "object",
        title: "Neden ?",
        name: "neden",
        fields: [
            {
                name: "title",
                type: "string",
                title: "Başlık",
            },
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
                title: "Paragraf",
                name: "content",
                type: "array",
                of: [
                    defineArrayMember({ type: "textAlignment" }),
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
    },
    {
        type: "object",
        title: "GirişModal",
        name: "modal",
        fields: [
            {
                name: "modalTitle",
                type: "string",
                title: "Başlık",
            },
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
                title: "Paragraf",
                name: "modalContent",
                type: "array",
                of: [
                    defineArrayMember({ type: "textAlignment" }),
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
    },
];
