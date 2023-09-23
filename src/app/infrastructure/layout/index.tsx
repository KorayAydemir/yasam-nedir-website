import Header from './header/index';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <Header />
            <div className='container mx-auto'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;
