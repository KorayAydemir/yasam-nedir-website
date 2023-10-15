import { fonts } from "../../../configurations";
import { ComponentType } from "react";
import { BlockAnnotationProps } from "sanity";

const fontSizeIcon = () => (
    <span>
        <span style={{ fontWeight: "bold", fontSize: "1rem" }}>A</span>
        <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>A</span>
    </span>
);

const fontStyleRenderer: ComponentType<BlockAnnotationProps> = props => {
    return (
        <div
            style={{
                fontSize: `${props.value.pixels}px`,
                fontFamily: props.value.fontFamily
                    ? `${props.value.fontFamily}`
                    : "Segoe UI",
            }}>
            {props.renderDefault(props)}
        </div>
    );
};

export const fontStyle = {
    name: "fontStyles",
    type: "object",
    title: "Yazı Stilleri",
    icon: fontSizeIcon,
    components: {
        annotation: fontStyleRenderer,
    },
    options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
        //editModal: "popover",
    },
    fields: [
        {
            name: "pixels",
            type: "number",
            title: "Pixels",
        },
        {
            name: "fontFamily",
            type: "string",
            title: "Yazı Tipi",
            options: {
                list: fonts,
            },
        },
    ],
};
