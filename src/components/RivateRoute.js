import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function RivateRoute() {
    const loggedIn = true;

  return (
   loggedIn ? <Outlet/> : Navigate("/login")
   )
}

export default RivateRoute
