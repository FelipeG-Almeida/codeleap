import { createContext } from 'react';

export const AuthContext = createContext<{
    user: string | null;
    login: (user: string) => void;
    logout: () => void;
}>({
    user: null,
    login: () => {},
    logout: () => {},
});
