import { defineType } from "sanity";

export const birim = defineType({
    type: "document",
    name: "birim",
    title: "Birim",
    preview: {
        select: {
            title: "title",
            num: "birim_no",
            media: "birim_icon",
        },
        prepare(selection) {
            const { title, num, media } = selection;
            return {
                title: `${num}- ${title}`,
                media: media,
            };
        },
    },
    fields: [
        { type: "string", name: "title", title: "Birimin Adı" },
        {
            title: "Birimin Simgesi",
            type: "image",
            name: "birim_icon",
            description: "gets scaled to 152x135",
        },
        {
            title: "Birim Numarası",
            name: "birim_no",
            type: "number",
            validation: Rule => Rule.required().positive().lessThan(100),
        },
    ],
});
