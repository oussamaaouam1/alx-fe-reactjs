import { BrowserRouter as Router, Route, Routes, Link, useMatch } from 'react-router-dom';

// Dashboard component that contains nested routes
const Dashboard = () => {
    // useMatch provides the current URL and path
    let match = useMatch("/dashboard/*");
    let path = match.pathnameBase;
    let url = match.pathname;

    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to={`${url}/ProfileDetails`}>Profile Details</Link>
                </li>
                <li>
                    <Link to={`${url}/ProfileSettings`}>Profile Settings</Link>
                </li>
            </ul>

            {/* Nested routes within the Dashboard component */}
            <Routes>
                {/* Default route that displays a message */}
                <Route path="/" element={<h3>Please select an option.</h3>} />
                {/* Nested route for Profile */}
                <Route path="/ProfileDetails" element={<ProfileDetails />} />
                {/* Nested route for Settings */}
                <Route path="/ProfileSettings" element={<ProfileSettings />} />
            </Routes>
            
        </div>
    );
};

// Profile component
const ProfileDetails = () => <h3>Profile Details</h3>;

// Settings component
const ProfileSettings = () => <h3>Profile Settings</h3>;

const NestedRoutesExample = () => (
    <Router>
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <Routes>
                {/* Route to Dashboard component */}
                <Route path="/dashboard/*" element={<Dashboard />} />
                {/* Default route to Home component */}
                <Route path="/" element={<h2>Home</h2>} />
            </Routes>
        </div>
    </Router>
);

export default NestedRoutesExample;
