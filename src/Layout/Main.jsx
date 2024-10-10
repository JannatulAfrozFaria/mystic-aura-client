import { Outlet, useLocation } from "react-router-dom";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login')
    return (
        <div>
            {/* <NavBar></NavBar> */}
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;