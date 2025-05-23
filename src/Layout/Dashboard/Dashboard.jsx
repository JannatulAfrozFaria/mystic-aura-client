import { useState, useEffect } from "react";
import { FaHome, FaListAlt, FaShoppingBag, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FaBlog, FaBook, FaCalendar, FaEnvelope, FaList, FaStreetView, FaUsers, FaWallet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../customHooks/useCart";
import { TbPerfume } from "react-icons/tb";

const Dashboard = () => {
    const [cart] = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    // TODO: get value from database
    const isAdmin = true;

    // Check screen size and update state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px is typically md breakpoint
            if (window.innerWidth >= 768) {
                setIsOpen(true); // Always show sidebar on larger screens
            }
        };

        // Set initial state
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    return (
        <div className="flex protest">
            {/* Mobile Header with Hamburger */}
            {isMobile && (
                <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-40 flex gap-4  items-center md:hidden">
                    <button onClick={toggleSidebar} className="text-2xl dashBrandSpan">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <div className="flex items-center">
                        <img className="w-8 mr-2" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="" />
                        <span className="dashBrand">Mystic <span className="dashBrandSpan">Aura</span></span>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div 
                className={`w-40 md:w-64 min-h-screen userDashboardBg text-dark2 p-2 md:p-6 
                    ${isMobile ? 
                        `fixed top-0 left-0 z-30 h-full transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}` 
                        : 'relative'}`}
            >
                {!isMobile && (
                    <div className="text-center grid grid-cols-1 gap-2">
                        <img className="w-16 mx-auto mt-4 md:mt-0" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="" />
                        <div>
                            <a href="/" className="hidden md:block md:text-4xl dashBrand">Mystic <span className="dashBrandSpan">Aura</span></a>
                        </div>
                    </div>
                )}

                <ul className="menu grid grid-cols-1 gap-1 mt-4">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'} onClick={closeSidebar}><FaHome /> Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/addItems'} onClick={closeSidebar}><TbPerfume /> Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'} onClick={closeSidebar}><FaList /> Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/bookings'} onClick={closeSidebar}><FaBook /> Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/users'} onClick={closeSidebar}><FaUsers /> All Users</NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to={'/dashboard/userHome'} onClick={closeSidebar}><FaHome /> User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/reservation'} onClick={closeSidebar}><FaCalendar /> Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/payment'} onClick={closeSidebar}><FaWallet /> Payment History</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/cart'} onClick={closeSidebar}><FaShoppingCart /> My Cart ({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/review'} onClick={closeSidebar}><FaStreetView /> Add Review</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/booking'} onClick={closeSidebar}><FaListAlt /> My Booking</NavLink>
                            </li>
                        </>
                    )}

                    <div className="divider"></div>
                    {/* SHARED NAV LINKS */}
                    <li>
                        <NavLink to={'/'} onClick={closeSidebar}><FaHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shop/floral'} onClick={closeSidebar}><FaShoppingBag /> Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blogs'} onClick={closeSidebar}><FaBlog /> Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blogs'} onClick={closeSidebar}><FaEnvelope /> Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content */}
            <div className={`flex-1 p-6 md:p-20 ${isMobile ? 'mt-16' : ''}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;