import { Link } from "react-router-dom";
import { useUniversalFetch } from "../../../../fetch/useUniversalFetch";

const Landing = () => {
    const data = useUniversalFetch();

    console.log('landing data', data);

    return (
        <>
            <h1 className="underline">Hello from Landing 👽</h1>
            <Link to="/yasambilim">GOTO yasambilim</Link>
        </>
    );
};

export default Landing;
