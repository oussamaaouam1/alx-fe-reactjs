import { BrowserRouter as  Route, Routes, Link, useMatch, } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

// Dashboard component that contains nested routes
const Dashboard = () => {
    // useMatch provides the current URL and path
    let match = useMatch("/dashboard/*");
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
export default Dashboard 