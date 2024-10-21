import { FaHome, FaListAlt, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { FaBlog, FaCalendar, FaStreetView, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex protest">
            <div className="w-40 md:w-64 h-screen userDashboardBg text-dark2 p-2 md:p-6">
                <div className="text-center grid grid-cols-1 gap-2">
                    <img className="w-16 mx-auto mt-4 md:mt-0" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="" />
                    <div>
                    <a className="text-xl md:text-4xl dashBrand">Mystic <span className="dashBrandSpan">Aura</span> </a>
                    </div>
                </div>
                <ul className="menu grid grid-cols-1 gap-1">
                    <li>
                         <NavLink to={'/dashboard/userHome'}> <FaHome/> User Home </NavLink>
                    </li>
                    <li>
                         <NavLink to={'/dashboard/reservation'}> <FaCalendar/> Reservation </NavLink>
                    </li>
                    <li>
                         <NavLink to={'/dashboard/payment'}> <FaWallet/> Payment History </NavLink>
                    </li>
                    <li>
                         <NavLink to={'/dashboard/cart'}> <FaShoppingCart/> My Cart </NavLink>
                    </li>
                    
                    <li>
                         <NavLink to={'/dashboard/review'}> <FaStreetView/> Add Review </NavLink>
                    </li>
                    <li>
                         <NavLink to={'/dashboard/booking'}> <FaListAlt/> My Booking </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                         <NavLink to={'/'}> <FaHome/> Home </NavLink>
                    </li>
                    <li>
                         <NavLink to={'/shop/floral'}> <FaShoppingBag/> Shop </NavLink>
                    </li>
                    <li>
                         <NavLink to={'/blogs'}> <FaBlog/> Blogs </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-6 md:p-20">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;