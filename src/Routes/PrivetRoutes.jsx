import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivetRoutes = ({children}) => {
    const {user} = use(AuthContext);

    if(!user) {
       return <Navigate to={'/signin'}></Navigate>
    }
    return children;
};

export default PrivetRoutes;