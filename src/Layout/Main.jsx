// import {useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";


const Main = () => {
    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signUp');
    return (
        <div>
            <NavBar></NavBar>
            {/* { noHeaderFooter || <NavBar></NavBar>} */}
            {/* <Outlet></Outlet> */}
             <main className="flex-grow">
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;