import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useFirebase from '../Pages/Shared/Authentication/Authentication';
import './spinner.css'
const Privateroute = ({children}) => {
    const {user,isloading} = useFirebase()

    const location = useLocation()

    if(isloading)
        {
            return <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
          </div>
        }
    if(user.email)
        {
            return children;
        }
    return <Navigate to="/login" state={{from: location}} />
};

export default Privateroute;