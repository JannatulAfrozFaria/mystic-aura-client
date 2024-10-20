// import { useContext, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link } from "react-router-dom";
// import Swal from 'sweetalert2';

// const NavBar = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const { user, logOut } = useContext(AuthContext);
//     const navItems = <>
//     <li className="menu-item">
//         <a href="/" className="navItem">Home</a>
//     </li>
//     <li className="menu-item">
//         <a href="/shop/floral" className="navItem">Shop</a>
//     </li>
//     <li className="menu-item">
//         <a href="/" className="navItem">Blog</a>
//     </li>
//     </>
//     const handleLogOut = () =>{
//         logOut()
//         .then(()=>{})
//         .catch((error) => console.log(error))
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Logged out successfully!",
//             showConfirmButton: false,
//             timer: 1500
//           });
//     }
//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };
//     return (
//         <div>
//             <div className="navbar fixed z-10 bg-black bg-opacity-30 ">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-basic">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] roboto font-semibold mt-3 w-52 p-2 shadow navItem">
//                             {navItems}
//                         </ul>
//                     </div>
//                     <img className="w-12 md:w-16" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="" />
//                     <a className="btn btn-ghost brandName text-xl md:text-4xl">Mystic <span className="brandSpan">Aura</span> </a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1 roboto font-semibold navItem">
//                         {navItems}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     {user ? (
//                         <div className="relative">
//                             <div
//                                 className="flex items-center gap-2 cursor-pointer"
//                                 onClick={toggleDropdown}
//                                 onMouseEnter={() => setDropdownOpen(true)}
//                                 onMouseLeave={() => setDropdownOpen(false)}
//                             >
//                                 <img
//                                     className="w-10 h-10 rounded-full"
//                                     src={user?.photoURL}
//                                     alt="profile-photo"
//                                 />
//                                 <span className="hidden md:block hover:visible hover:opacity-100 opacity-0 transition-opacity duration-200">
//                                     {user?.displayName}
//                                 </span>
//                             </div>

//                             {dropdownOpen && (
//                                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
//                                     <ul className="py-2">
//                                         <li>
//                                             <Link
//                                                 to="/profile"
//                                                 className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                                             >
//                                                 Profile Details
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <button
//                                                 onClick={handleLogOut}
//                                                 className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                                             >
//                                                 Log Out
//                                             </button>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         <Link to={"/login"} className="btn btn-basic btn-sm">Login</Link>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavBar;

{/* {
                        user? <>
                        <div className="flex gap-2 ">
                            <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="profile-photo" />
                            <button onClick={handleLogOut}>
                                <Link className="btn btn-basic btn-sm ">Log out</Link>
                            </button>
                        </div>
                        
                            
                        </> :
                        <>
                            <Link to={"/login"} className="btn btn-basic btn-sm ">Login</Link>
                        </>
                    } */}
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaCartShopping } from "react-icons/fa6";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // For detecting clicks outside the dropdown

    const navItems = <>
        <li className="menu-item">
            <Link to="/" className="navItem">Home</Link>
        </li>
        <li className="menu-item">
            <Link to="/shop/floral" className="navItem">Shop</Link>
        </li>
        <li className="menu-item">
            <Link to="/" className="navItem">Blog</Link>
        </li>
        <li className="menu-item">
            <Link to="/" className="navItem">
                <button className=" flex gap-2 items-center">
                    <FaCartShopping />
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link>
        </li>
    </>;

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged out successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => console.log(error));
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false); // Close the dropdown
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-basic">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] roboto font-semibold mt-3 w-52 p-2 shadow navItem">
                            {navItems}
                        </ul>
                    </div>
                    <img className="w-12 md:w-16" src="https://i.postimg.cc/0y5NHLYT/mystic-aura-logo.png" alt="" />
                    <a className="btn btn-ghost brandName text-xl md:text-4xl">Mystic <span className="brandSpan">Aura</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 roboto font-semibold navItem">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex gap-2 text-basic items-center ">
                            <div> <p className="roboto font-semibold"> {user?.displayName} </p> </div>
                            <div className="relative" ref={dropdownRef}>
                                <div
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={toggleDropdown}
                                >
                                    <img
                                        className="w-10 h-10 rounded-full border-3 border-[#FBCFE8]"
                                        src={user?.photoURL}
                                        alt="profile-photo"
                                    />
                                    <span className="hidden md:block hover:visible hover:opacity-100 opacity-0 transition-opacity duration-200 text-white">
                                        {user?.displayName}
                                    </span>
                                </div>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                                        <ul className="py-2">
                                            <li>
                                                <Link
                                                    to="/profile"
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    Profile Details
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    Log Out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                    ) : (
                        <Link to={"/login"} className="btn btn-basic btn-sm">Login</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
