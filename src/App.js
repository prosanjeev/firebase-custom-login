// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
// import { selectIsLoggedIn } from './Slice/authSlice';
import PrivateRoute from './components/PrivateRoute.js/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import {  selectIsLoggedIn } from './Slice/authSlice';

const App = () => {
  const isLoggedInRedux = useSelector(selectIsLoggedIn);
  const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn") === "true";
  const isLoggedIn = isLoggedInRedux || isLoggedInLocalStorage;
  const dispatch = useDispatch();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !redirected) {
      setRedirected(true);
    }
  }, [isLoggedIn, redirected]);

  return (
    <>
    <Router>

    

    <Routes>
        <Route path='/login' element={<Login/>} />
        
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<div>Home hi </div>} />
       </Route>
      
      </Routes>
    </Router>
    </>
  );
};

export default App;
