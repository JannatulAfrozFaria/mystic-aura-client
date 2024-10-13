import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div
        className="radial-progress bg-primary text-primary-content border-primary border-4"
        style={{ "--value": 70 }}
        role="progressbar">
        {/* 70% */}
                </div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} ></Navigate>
};

export default PrivateRoute;