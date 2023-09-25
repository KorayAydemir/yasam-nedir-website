import { Link } from "react-router-dom";
import { useUniversalFetch } from "../../../../fetch/useUniversalFetch";
const ahto = "../../../../../public/assets/images/ahto.png";

const Landing = () => {
    const data = useUniversalFetch();

    console.log("landing data", data);

    return (
        <>
            <img alt="background" src={ahto} />
            <p className="text-center">Hello from world</p>
            <Link to="/yasambilim">GOTO yasambilim</Link>
        </>
    );
};

export default Landing;
