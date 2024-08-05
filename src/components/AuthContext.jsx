import React, { createContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('auth-req='));

        const fetchUserInfo = async () => {
            if (!token) {
                return;
            }

            const tokenValue = token.split('=')[1];

            try {
                const res = await fetch(`/server/user/mypage`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokenValue}`
                    }
                });
                const data = await res.json();
                setUser(data);
            } catch (e) {
                console.log(e);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;