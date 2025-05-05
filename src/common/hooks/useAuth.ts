import React from 'react';
import { AuthContext } from '../context/authContext';

export const useAuth = () => {
    const { user, login, logout } = React.useContext(AuthContext);

    return { user, login, logout };
};
