import { useUniversalFetch } from "../../../../fetch/useUniversalFetch";
const ahto = "../../../../../public/assets/images/ahto.png";
import Links from "./components/links";
import { getLanding } from "../../../../fetch";

const Landing = () => {
    const landingData = useUniversalFetch(getLanding);
    console.log("landingdata", landingData);

    return (
        <>
            <img alt="background" src={ahto} />
            <Links />
            <p className="text-center">Hello from world</p>
        </>
    );
};

export default Landing;
