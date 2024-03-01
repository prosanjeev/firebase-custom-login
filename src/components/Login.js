// Login.js
import React, { useEffect, useState } from 'react';
import  { database } from '../config/FirebaseConfig';
import { collection,  getDocs, query, where } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { login } from '../Slice/authSlice';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const ref = collection(database, 'users');

  const handleLogin = async () => {
    const q = query(ref, where("user", "==", username), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size === 1) {
      dispatch(login());
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      console.log("Login successful!");
    } else {
      console.log("Login failed!");
    }
  };

//   useEffect(() => {
//     const getData = async () => {
//       const q = query(ref, where("user", "==", "sanjeev"), where("password", "==", "sanjeevabc"));
//       const querySnapshot = await getDocs(q);
//       console.log(querySnapshot.size)
//       querySnapshot.forEach((doc) => {

//         console.log(doc.id, " => ", doc.data());
// });
// //       // Create a reference to the cities collection
// // const citiesRef = database.collection('users');

// // // Create a query against the collection 
// // const queryRef = citiesRef.where('user', '==', 'sanjeev');
//     };
//     getData();
//   },[] );

// useEffect(() => {
//   const getData = async () => {
//     const q = query(ref, where("user", "==", "sanjeev"), where("password", "==", "sanjeevabc"));
//     const querySnapshot = await getDocs(q);
//     if (querySnapshot.size === 1) {
//       setIsLoggedIn(true);
//       console.log("Login successful!");
//     } else {
//       console.log("Login failed!");
//     }
//   };
//   getData();
// }, []);

// const handleLogin = async () => {
//   const q = query(ref, where("user", "==", username), where("password", "==", password));
//   const querySnapshot = await getDocs(q);
//   if (querySnapshot.size === 1) {
//     setIsLoggedIn(true);
//     console.log("Login successful!");
//   } else {
//     console.log("Login failed!");
//   }
// };  

  return (
    
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <p>Log in failed. Please check your credentials.</p>
      )}
      {isLoggedIn ? (
        <Link to='/dashboard'><button>Dashboard</button></Link>
      ) : (
        ''
      )}

     
    </div>
  );
};

export default Login;
