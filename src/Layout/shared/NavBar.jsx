

const NavBar = () => {
    const navItems = <>
    <li className="menu-item">
        <a href="/" className="navItem">Home</a>
    </li>
    <li className="menu-item">
        <a href="/shop/floral" className="navItem">Shop</a>
    </li>
    <li className="menu-item">
        <a href="/" className="navItem">Blog</a>
    </li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-30 ">
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
                    <a href="/login" className="btn btn-basic btn-sm">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;