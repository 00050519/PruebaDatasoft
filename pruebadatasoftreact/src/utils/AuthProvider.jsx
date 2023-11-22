import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'

const authContext = createContext({
    isAuthenticated: false
});

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

  return <authContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</authContext.Provider>
}

export const useAuth = () => useContext(authContext);