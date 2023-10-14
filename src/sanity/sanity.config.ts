import { deskTool } from "sanity/desk";
import { defineConfig, type WorkspaceOptions } from "sanity";
import { schemaTypes } from "./schemas";
import deskStructure, {
    getDefaultDocumentNode,
} from "./structure/deskStructure";

export const config = defineConfig<WorkspaceOptions>({
    projectId: "9cr46sy3",
    dataset: "production",
    basePath: "/admin",
    name: "Test",
    plugins: [
        deskTool({
            structure: S => deskStructure(S),
            defaultDocumentNode: S => getDefaultDocumentNode(S),
        }),
    ],
    schema: {
        types: schemaTypes,
    },
});
