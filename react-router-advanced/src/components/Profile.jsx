import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import Dashboard from './Dashboard';
import BlogPost from './BlogPost';

// // Dashboard component that contains nested routes
// const Dashboard = () => {
//     // useMatch provides the current URL and path
//     let match = useMatch("/dashboard/*");
//     let url = match.pathname;

//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <ul>
//                 <li>
//                     <Link to={`${url}/ProfileDetails`}>Profile Details</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/ProfileSettings`}>Profile Settings</Link>
//                 </li>
//             </ul>

//             {/* Nested routes within the Dashboard component */}
//             <Routes>
//                 {/* Default route that displays a message */}
//                 <Route path="/" element={<h3>Please select an option.</h3>} />
//                 {/* Nested route for Profile */}
//                 <Route path="/ProfileDetails" element={<ProfileDetails />} />
//                 {/* Nested route for Settings */}
//                 <Route path="/ProfileSettings" element={<ProfileSettings />} />
//             </Routes>
            
//         </div>
//     );
// };



// // Profile component
// const ProfileDetails = () => <h3>Profile Details</h3>;

// // Settings component
// const ProfileSettings = () => <h3>Profile Settings</h3>;


// Dynamic BlogPost component
// const BlogPost = () => {
//     const { postSlug } = useParams();
//     const blogPosts = {
//         "react-router-tutorial": "Learn how to use React Router...",
//         "state-management-with-zustand": "Zustand is a great state management tool..."
//     };
//     const postContent = blogPosts[postSlug];

//     if (!postContent) return <h3>Blog post not found</h3>;

//     return (
//         <div>
//             <h2>{postSlug.replace("-", " ").toUpperCase()}</h2>
//             <p>{postContent}</p>
//         </div>
//     );
// };

const NestedRoutesExample = () => (
    <Router>
        <div>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blog/react-router-tutorial">React Router Tutorial</Link> | {" "}
                <Link to="/blog/state-management-with-zustand">State Management with Zustand</Link>
            </nav>
            <Routes>
                {/* Route to Dashboard component */}
                <Route path="/dashboard/*" element={<Dashboard />} />
                {/* Default route to Home component */}
                <Route path="/" element={<h2>Home</h2>} />
                <Route path="/blog/:postSlug" element={<BlogPost />} />
            </Routes>
        </div>
    </Router>
);

export default NestedRoutesExample;
