import { deskTool } from "sanity/desk";
import { defineConfig, type WorkspaceOptions } from "sanity";
import { schemaTypes } from "./schemas";
import deskStructure, {
    getDefaultDocumentNode,
} from "./structure/deskStructure";
import { latexInput } from "./schemas/types/latex-input";
import { youtubeEmbed } from "./schemas/types/youtube-embed";
import { textAlignment } from "./schemas/types/text-alignment";
import { pages } from "./schemas/pages";

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
        types: [
            ...pages,
            ...schemaTypes,
            latexInput,
            youtubeEmbed,
            textAlignment,
        ],
    },
});
