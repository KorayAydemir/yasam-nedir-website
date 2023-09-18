import { useSelector } from "react-redux";

const Banner = () => {
    const data = useSelector(state => state.layout.data[0]);

    return (
        <h1 className="text-5xl text-center">{data._id}</h1>
    );
}

export default Banner;
