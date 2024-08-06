import React, { createContext, useState, useEffect } from 'react';
import UserService from '../services/UserService.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await UserService.getUserInfo();
                setUser(res);
                setIsLoggedIn(true);
            } catch (e) {
                console.log(e);
            }
        };

        fetchUserInfo();
    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext as default, AuthProvider } ;