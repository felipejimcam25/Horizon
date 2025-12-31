import { createContext, useState } from "react";


const AuthContext = createContext();

export function AuthProvider ( { children } ) {
    const [ session, setSession ] = useState(
        JSON.parse(localStorage.getItem('session'))
    );

    const login = (userData) => {
        localStorage.setItem('session', JSON.stringify(userData));
        setSession(userData);
    }

    const logout = () => {
        localStorage.removeItem('session')
        setSession(null);
    } 

    const isAuthenticated = !!session;

    return (
        <AuthContext.Provider value={{ session, login, logout, isAuthenticated }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;