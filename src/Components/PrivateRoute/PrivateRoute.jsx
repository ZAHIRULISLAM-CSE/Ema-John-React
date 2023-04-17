import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextAuth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const location=useLocation();
    if(user){
        return children;
    }
     return <Navigate to='/login' state={location.pathname}   replace></Navigate>
};

export default PrivateRoute;