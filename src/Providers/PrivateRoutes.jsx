import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProviders";


const PrivateRoutes = ({children}) => {
    const{users, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-md"></span>
    }
    
    if(users?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;