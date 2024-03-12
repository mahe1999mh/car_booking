import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const PrivateProductDetails = ({children}) => {
     
   const location = useLocation();
   const {user, loading} = useContext(AuthContext);

   if(loading) {
    return <div className="flex justify-center items-center mt-16"><span className="loading loading-spinner loading-lg"></span></div>
   }

   if(user) {
     return children
   }

   return <Navigate state={location.pathname} to='/signIn'></Navigate>

    
};

export default PrivateProductDetails;