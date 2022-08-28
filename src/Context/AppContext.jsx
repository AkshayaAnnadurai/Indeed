import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
//   const[user,setUser]=useState({email:"",password:""})
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
// const[user,setUser]=useState([])
 

  const value = {isAuth,setIsAuth,email,setEmail,password,setPassword };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };