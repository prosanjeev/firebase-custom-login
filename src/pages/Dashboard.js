// Dashboard.js
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Slice/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn"); // Remove from local storage as well
    console.log("Logout successful!");
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
