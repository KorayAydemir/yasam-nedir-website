import { useUniversalFetch } from "../../../../fetch/useUniversalFetch";
const ahto = "../../../../../public/assets/images/ahto.png";
import Links from "./components/links";

const Landing = () => {
    const data = useUniversalFetch();

    console.log("landing data", data);

    return (
        <>
            <img alt="background" src={ahto} />
            <Links />
            <p className="text-center">Hello from world</p>
        </>
    );
};

export default Landing;
