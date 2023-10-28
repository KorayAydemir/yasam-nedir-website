import { defineType } from "sanity";

export const comments = defineType({
    name: "comment",
    type: "document",
    title: "Yorumlar",
    fields: [
        {
            name: "name",
            type: "string",
            title: "İsim",
            validation: Rule =>
                Rule.required()
                    .max(60)
                    .error("Name can't be longer than 60 characters."),
        },
        {
            title: "Onay Durumu",
            name: "approved",
            type: "boolean",
            description: "Onaylanmayan yorumlar sitede gösterilmez.",
        },
        {
            name: "email",
            type: "string",
            title: "E-Posta",
            validation: Rule =>
                Rule.required()
                    .max(254)
                    .error("Email can't be longer than 60 characters.")
                    .min(5)
                    .error("Email can't be shorter than 5 characters."),
        },
        {
            name: "comment",
            type: "text",
            title: "Yorum",
            validation: Rule =>
                Rule.required()
                    .max(1024)
                    .error("Comment can't be longer than 1024 characters."),
        },
        {
            name: "post",
            type: "string",
            readOnly: true,
        },
        {
            name: "replies",
            type: "array",
            title: "Yanıtlar",
            of: [
                {
                    type: "reference",
                    to: [{ type: "comment" }],
                    weak: true,
                },
            ],
            readOnly: true,
        },
        {
            name: "parent",
            title: "Ait Olduğu Yorum",
            type: "reference",
            to: [{ type: "comment" }],
            readOnly: true,
        },
    ],
    preview: {
        select: {
            name: "name",
            comment: "comment",
            post: "post",
            email: "email",
        },
        prepare({ name, comment, email }) {
            return {
                title: `${name} - ${email}`,
                subtitle: comment,
            };
        },
    },
});
