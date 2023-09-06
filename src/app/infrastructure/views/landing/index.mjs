const Landing = (props) => {
    const p = props;
    
    return (
        <>
            <h1>Hello from Landing 👽</h1>
            <h2>{ p?.data?.userName }</h2>
        </>
    );
};

export default Landing;
