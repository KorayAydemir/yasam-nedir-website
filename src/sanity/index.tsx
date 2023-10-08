import { Studio, type WorkspaceOptions } from "sanity";
import { ReactElement, useEffect, useState } from "react";

const Sanity = () => {
    const [studio, setStudio] = useState<null | ReactElement>(null);

    useEffect(() => {
        const config: WorkspaceOptions  = {
            projectId: "9cr46sy3",
            dataset: "production",
            basePath: "/admin",
            name: "Test",
        }
        setStudio(<Studio config={config} />) 
    }, [])

    return studio;
}

export default Sanity;
