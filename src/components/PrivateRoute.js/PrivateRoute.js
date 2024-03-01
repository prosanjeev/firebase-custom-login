// PrivateRoute.js
import React from "react";
import { Route, Navigate, Routes, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../Slice/authSlice";
import Dashboard from "../../pages/Dashboard";

const PrivateRoute = ({ path, element }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    // return isLoggedIn ? <Routes> <Route path='/dashboard' element={<Dashboard/>  } />   </Routes> : <Navigate to="/login" />  ;
    
     return isLoggedIn ? <Outlet/> : ( <Navigate to="/login" /> );
  };
  
export default PrivateRoute;
