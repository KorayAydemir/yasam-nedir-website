import { StructureBuilder } from "sanity/desk";
import { createSanityClient } from "../../fetch/index";

const ignoredDocTypes = ["comment"];

const restOfTheDocs = (S: StructureBuilder) =>
    S.documentTypeListItems().filter(
        listItem => !ignoredDocTypes.includes(listItem.getId() ?? "")
    );

const sanityClient = createSanityClient({
    useCdn: false,
    withCredentials: true,
});

export const getDefaultDocumentNode = (S: StructureBuilder) => {
    return S.document().views([S.view.form()]);
};

export default async (S: StructureBuilder) =>
    S.list()
        .title("İçerik")
        .items([
            ...restOfTheDocs(S),
            S.listItem()
                .title("Yorumlar")
                .child(
                    S.list()
                        .title("Status")
                        .items(await commentFilters(S))
                ),
            S.divider(),
            S.listItem()
                .title("Tooltips")
                .child(
                    S.document().schemaType("tooltips").documentId("tooltips")
                ),
            S.listItem()
                .title("Genel Ayarlar")
                .child(
                    S.document()
                        .schemaType("settings")
                        .documentId("settings")
                        .views([S.view.form()])
                ),

            S.listItem()
                .title("Giriş Modal")
                .child(S.document().schemaType("modal").documentId("modal")),
            S.listItem()
                .title("Neden ?")
                .child(S.document().schemaType("neden").documentId("neden")),
        ]);

const commentFilters = async (S: StructureBuilder) => {
    let slugs = new Set();
    slugs = await sanityClient.fetch('*[_type == "comment"].post');
    const uniqueSlugs = [...new Set(slugs)];

    const postsThatHaveComments = (approvedStatus: string) =>
        uniqueSlugs.map(slug => {
            return S.listItem()
                .title(slug as string)
                .child(() =>
                    S.documentList()
                        .title("Yorumlar")
                        .filter(
                            `_type == "comment" && post == "${slug}"  && ${approvedStatus}`
                        )
                );
        });

    return [
        S.listItem()
            .title("Bekleyen")
            .child(
                S.list()
                    .title("Posts")
                    .items(postsThatHaveComments("!defined(approved)"))
            ),
        S.listItem()
            .title("Reddedilmiş")
            .child(
                S.list()
                    .title("Posts")
                    .items(postsThatHaveComments("approved == false"))
            ),
        S.listItem()
            .title("Kabul Edilmiş")
            .child(
                S.list()
                    .title("Posts")
                    .items(postsThatHaveComments("approved == true"))
            ),
    ];
};
