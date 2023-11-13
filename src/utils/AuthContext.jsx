
import React, {createContext, useContext, useEffect, useState} from 'react';



export const AuthContext = createContext();


// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState(null); // Add user state
//
//
//
//     const login = (userData) => { // Pass user data when logging in
//         setIsAuthenticated(true);
//         setUser(userData);
//     };
//
//     const logout = () => {
//         setIsAuthenticated(false);
//         setUser(null); // Clear user data on logout
//
//
//     };
//
//     return (
//         <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
//
// export const useAuth = () => {
//     return useContext(AuthContext);
// };

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // Check for saved authentication status, user, and token on app startup
    useEffect(() => {
        const savedIsAuthenticated = localStorage.getItem('isAuthenticated');
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedIsAuthenticated === 'true' && savedUser) {
            setIsAuthenticated(true);
            setUser(savedUser);
        }
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
 };