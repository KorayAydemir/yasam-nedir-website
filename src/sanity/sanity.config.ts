import { deskTool } from "sanity/desk";
import { defineConfig, type WorkspaceOptions } from "sanity";
import { schemaTypes } from "./schemas";

export const config = defineConfig<WorkspaceOptions>({
    projectId: "9cr46sy3",
    dataset: "production",
    basePath: "/admin",
    name: "Test",
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
    },
});
