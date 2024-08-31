import { useQuery } from 'react-query';

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Network response was not ok');
      }
    return res.json();
};

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, isLoading, isError, error } = useQuery('posts', fetchPosts,{
      cacheTime: 1000 * 60 *  10,//10 min
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true, // Refetch when window gains focus
      keepPreviousData: true // Keep previous data while fetching new data

    });
    

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return 
    <div>
      Error loading posts: {error?.message || 'An unknown error occurred.'}
      </div>;

    // Render the fetched data
    return (
        <div>
            {data.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
            <button onClick={fetchPosts}>Refetch</button>
        </div>
    );
};

export default PostsComponent;