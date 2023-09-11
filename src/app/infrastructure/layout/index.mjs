import Header from './header/index.mjs';
import { Outlet } from 'react-router-dom';
const Layout = (props) => {
    const {title, description} = props.serverSideProps
    console.log('title',props.serverSideProps.title)

    return (
        <>
            {title}
            {description}
            <Header />
            <div className='container mx-auto'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;
