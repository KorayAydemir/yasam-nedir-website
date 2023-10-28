import { defineType } from "sanity";

export const bolum = defineType({
    type: "document",
    title: "Bölüm",
    name: "Bolum",
    preview: {
        select: {
            title: "title",
            subtitle: "related_birim.birim_no",
            num: "bolum_no",
            media: "birim_icon",
        },
        prepare(selection) {
            const { title, subtitle, num, media } = selection;
            return {
                title: `${num}- ${title}`,
                subtitle: `Birim: ${subtitle}`,
                media: media,
            };
        },
    },
    fields: [
        { type: "string", name: "title", title: "Bölümün Adı" },
        {
            title: "Bölümün Simgesi",
            type: "image",
            name: "birim_icon",
            description: "gets scaled to 152x135",
            options: {
                hotspot: true,
            },
        },
        {
            title: "Bölüm Numarası",
            name: "bolum_no",
            type: "number",
            validation: Rule => Rule.required().positive().lessThan(100),
        },
        {
            title: "Ait Olduğu Birim",
            description:
                "Her bölüm bir birim ile ilişkilendirilmek zorundadır.",
            name: "related_birim",
            type: "reference",
            to: [{ type: "birim" }],
        },
        {
            type: "array",
            name: "alt_bolumler",
            title: "Alt Bölümleri",
            of: [{ type: "alt_bolumler" }],
        },
    ],
});
