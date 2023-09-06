import { Outlet, Navigate, Routes, Route, useLocation} from 'react-router-dom'

import React from 'react'

const Layout = () => {
  
    const user = null;
  const location = useLocation()

  return user?.token ? (
    <Outlet />
  ): (
    <Navigate to='/login' state={{from : location}} replace />
  )
  
}

export default Layout