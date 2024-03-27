import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRouteForUser = ({children}) => {
  const user = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();

  if(user?.role === 'user'){
    return children;
  }
  else{
    return navigate('/login');
  }
}

export default ProtectedRouteForUser