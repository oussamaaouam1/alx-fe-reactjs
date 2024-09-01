import { useParams } from 'react-router-dom';

const BlogPost = () => {
    const { postSlug } = useParams();
    const blogPosts = {
        "react-router-tutorial": "Learn how to use React Router...",
        "state-management-with-zustand": "Zustand is a great state management tool..."
    };
    const postContent = blogPosts[postSlug];

    if (!postContent) return <h3>Blog post not found</h3>;

    return (
        <div>
            <h2>{postSlug.replace("-", " ").toUpperCase()}</h2>
            <p>{postContent}</p>
        </div>
    );
};

export default BlogPost;