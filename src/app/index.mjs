import "../css/index.css"
import { Route }    from "react-router-dom";
import { Routes }   from "react-router-dom";

import Landing      from "./infrastructure/views/landing/index.mjs";
import Yasambilim   from "./infrastructure/views/yasambilim/index.mjs";
import Layout       from "./infrastructure/layout/index.mjs";

const App = (props) => {
    const { serverSideProps } = props;

    return (
        <Routes>
            <Route element={ <Layout serverSideProps={ serverSideProps }/> } >
                <Route path="/"           element={ <Landing    serverSideProps={ serverSideProps }/> } />
                <Route path="/yasambilim" element={ <Yasambilim serverSideProps={ serverSideProps }/> } />
            </Route>
        </Routes>
    );
};
export default App;
