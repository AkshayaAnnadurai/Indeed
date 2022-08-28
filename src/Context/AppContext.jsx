import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
//   const [isAuth, setIsAuth] = React.useState(false);
  const[user,setUser]=useState({email:"",password:""})


 

  const value = {  user,setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };