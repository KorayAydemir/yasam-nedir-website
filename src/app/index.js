import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landing from "./infrastructure/views/landing/index.js";

const App = (props) => {
    const p = props;
    console.log(p)
    return (
        <Routes>
            <Route path="/" element={<Landing/>}/>
        </Routes>
    );
};
export default App;
