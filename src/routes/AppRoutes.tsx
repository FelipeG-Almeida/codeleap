import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Feed from '../pages/Feed/Feed';
import { useAuth } from '../common/hooks/useAuth';

const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route
                path='/'
                element={user ? <Navigate to='/feed' replace /> : <Login />}
            />
            <Route
                path='/feed'
                element={user ? <Feed /> : <Navigate to='/' replace />}
            />
        </Routes>
    );
};

export default AppRoutes;

