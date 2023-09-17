import { useSelector } from "react-redux";

const Banner = () => {
    const r = useSelector(state => ({
        title: state.title
    }) );

    return (
        <h1 className="text-5xl text-center">{r.title}</h1>
    );
}

export default Banner;
