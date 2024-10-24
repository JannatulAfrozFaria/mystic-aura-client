import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate ,useLocation} from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
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
    return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;