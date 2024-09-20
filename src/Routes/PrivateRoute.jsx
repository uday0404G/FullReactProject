import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isLogin=localStorage.getItem("IsLogin")
  return (
    isLogin?children:<Navigate to={"/Login"}/>
  )
}

export default PrivateRoute