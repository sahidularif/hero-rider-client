import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated } from "./authService";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [jwt, setJwt] = useState('')
    useEffect(() => {
        const jwt = isAuthenticated()
        setJwt(jwt)
    }, [])
    return (
        <AuthContext.Provider value={{ jwt, setJwt }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}
export default AuthContext