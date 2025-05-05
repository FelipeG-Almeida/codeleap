import React, { useState } from 'react';
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(
        localStorage.getItem('user')
    );

    const login = (user: string) => {
        localStorage.setItem('user', user);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
