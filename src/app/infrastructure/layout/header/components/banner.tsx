import { useSelector } from "react-redux";

const Banner = () => {
    const data = useSelector(state => state?.layout?.data);

    return <h1 className="text-5xl text-center">{data && data[0]._id}</h1>;
};

export default Banner;
