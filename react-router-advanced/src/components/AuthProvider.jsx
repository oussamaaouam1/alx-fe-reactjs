import  { createContext, useContext, useState } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component to wrap the app and provide auth state
// eslint-disable-next-line react/prop-types
 const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to simulate login
    const login = () => {
        setIsAuthenticated(true);
    };

    // Function to simulate logout
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider
