import { Studio } from "sanity";
import { ReactElement, useEffect, useState } from "react";
import { config } from "./sanity.config";

const Sanity = () => {
    const [studio, setStudio] = useState<null | ReactElement>(null);

    useEffect(() => {
        setStudio(<Studio config={config} />);
    }, []);

    return studio;
};

export default Sanity;
