import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;