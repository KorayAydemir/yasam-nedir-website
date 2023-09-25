import { Link } from "react-router-dom";

const Buttons = () => {
    return (
        <>
            <Link to="/yasambilim">Yaşam Bilim</Link>
            <Link to="/evrim-kurami">Evrim Kuramı</Link>
            <Link to="/denemeler">Denemeler</Link>
        </>
    );
};

export default Buttons;
