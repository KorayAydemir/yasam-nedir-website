import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
    name: "default",
    title: "Sanity Project",

    projectId: "9cr46sy3",
    dataset: "production",

    plugins: [deskTool()],

    schema: {
        types: schemaTypes,
    },
});
