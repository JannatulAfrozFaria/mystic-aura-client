import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;