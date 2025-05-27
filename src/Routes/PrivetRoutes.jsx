import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(!user) {
       return <Navigate to={'/signin'} state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivetRoutes;