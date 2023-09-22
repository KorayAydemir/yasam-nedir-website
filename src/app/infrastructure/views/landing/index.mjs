import { useGetLandingQuery } from "../../../../client/fetcher.mjs";
//*[_type in ["tooltips"]]{kelimeler}

import { useSelector } from "react-redux";

const Landing = () => {
    const { data, error, isLoading } = useGetLandingQuery();
    console.log('smoldata',data, error, isLoading);
    const allData = useSelector(state => state);
    console.log('allData',allData)

    return (
        <>
            <h1 className="underline">Hello from Landing 👽</h1>
        </>
    );
};

export default Landing;
