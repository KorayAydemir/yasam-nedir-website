import "../css/index.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Landing from "./infrastructure/views/landing/index";
import Yasambilim from "./infrastructure/views/yasambilim/index";
import Layout from "./infrastructure/layout/index";
import Sanity from "../sanity";

const App = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<Sanity />} />
            <Route path="/" element={<Landing />} />
            <Route element={<Layout />}>
                <Route path="/yasambilim" element={<Yasambilim />} />
            </Route>
        </Routes>
    );
};
export default App;
