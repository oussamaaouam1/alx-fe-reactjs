
import  useAuth  from './AuthProvider';
import  {useNavigate}  from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/profile'); // Redirect to profile after login
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
