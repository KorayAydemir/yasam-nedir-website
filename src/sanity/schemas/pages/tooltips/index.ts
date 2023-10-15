import { defineType } from "sanity";

export const tooltips = defineType({
    type: "object",
    title: "Tooltips",
    name: "tooltips",
    fields: [{ type: "text", title: "kelimeler", name: "kelimeler" }],
});
