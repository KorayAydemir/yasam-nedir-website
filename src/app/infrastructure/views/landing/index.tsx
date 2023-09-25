import { Link } from "react-router-dom";
import { useUniversalFetch } from "../../../../fetch/useUniversalFetch";
import ahto from "../../../../../public/assets/images/ahto.png";

const Landing = () => {
    const data = useUniversalFetch();

    console.log("landing data", data);

    return (
        <>
            <h1 className="underline">Hello from Landing 👽</h1>
            <img alt="background" src={ahto} />
            <Link to="/yasambilim">GOTO yasambilim</Link>
        </>
    );
};

export default Landing;
