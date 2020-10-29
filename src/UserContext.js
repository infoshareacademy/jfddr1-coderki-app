// import React, { useState, createContext, useEffect } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   }, []);

//   const isLoggedIn = user === null ? false : true;

//   const createUser = (email, password) =>
//     firebase.auth().createUserWithEmailAndPassword(email, password);

//   const logIn = (email, password) =>
//     firebase.auth().signInWithEmailAndPassword(email, password);

//   const value = {
//     user,
//     isLoggedIn,
//     createUser,
//     logIn,
//   };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
