import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
    const { id } = useParams(); // Get the dynamic ID from the URL
    const post = posts.find((p) => p.id === parseInt(id)); // Find the post by ID

    if (!post) return <h3>Blog post not found</h3>; // If no post is found, show an error

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPost;
