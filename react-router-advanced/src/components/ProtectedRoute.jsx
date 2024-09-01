/* eslint-disable react/prop-types */
import { Route, Navigate } from 'react-router-dom';
import  useAuth  from './AuthProvider';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;