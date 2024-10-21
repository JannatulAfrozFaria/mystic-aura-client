import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-">
                <ul className="menu">
                    <li><NavLink to={'/dashboard/cart'}>My Cart</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;