import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogPost from './components/BlogPost';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './components/AuthProvider';
import Profile from './components/Profile1';
import Login from './components/Login';

const posts = [
    { id: 1, title: 'React Router Tutorial', content: 'Learn how to use React Router...' },
    { id: 2, title: 'State Management with Zustand', content: 'Zustand is a great state management tool...' },
];

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src="/react.svg" className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {/* ---------------------my code------------------------ */}
            <BrowserRouter>
                <AuthProvider>
                    <nav>
                        <Link to="/dashboard">Dashboard</Link> | {" "}
                        <Link to="/profile">Profile</Link>
                    </nav>
                    <Routes>
                        <Route path="/blog/:id" element={<BlogPost posts={posts} />} />
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<h2>Home</h2>} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
