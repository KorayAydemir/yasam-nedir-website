const IndentIcon = () => "|->";

const Indent = ({ children }: React.PropsWithChildren) => {
    return <p style={{ marginLeft: "2em" }}>{children}</p>;
};

export const indent = {
    title: "Indented",
    value: "indented",
    icon: IndentIcon,
    component: Indent,
};
