import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();

    if(user?.role === 'admin'){
        return children;
    }
    else{
        navigate('/login');
    }
    
}

export default ProtectedRouteForAdmin