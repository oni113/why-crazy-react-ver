import React, { createContext, useState, useEffect } from 'react';
import UserService from '../services/UserService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ hasAdminRole, setHasAdminRole ] = useState(false);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await UserService.getUserInfo();
                setUser(res);
                setIsLoggedIn(res.userId ? true : false);
                setHasAdminRole(res.hasAdminRole);
            } catch (e) {
                console.log(e);
            }
        };

        fetchUserInfo();
    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
        setIsLoggedIn(newUser.userId ? true : false);
        setHasAdminRole(newUser.hasAdminRole);
    };

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, hasAdminRole, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext as default, AuthProvider } ;