


import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const islogin=localStorage.getItem('IsLogin');
    return (
    
        islogin ? children :<Navigate to={'/login'} />
   
  )
}

export default PrivateRoute