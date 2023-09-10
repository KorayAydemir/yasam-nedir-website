import Banner       from "./components/banner.mjs";
import Sections     from "./components/sections.mjs";

const Header = () => {
    return (
        <header className="">
            <Banner />
            <Sections />
            <h1>Header</h1>
        </header>
    );
};

export default Header
