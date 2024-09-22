import  { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');       // New state for location
  const [minRepos, setMinRepos] = useState('');       // New state for repository count
  const [users, setUsers] = useState([]);             // To store the list of users from the search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'minRepos') setMinRepos(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos); // Advanced search function
      setUsers(data.items); // GitHub's Search API returns an array in 'items'
    } catch {
      setError('Something went wrong with your search');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleFormSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            name="username"
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            name="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            name="minRepos"
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && (
        <div className="mt-6">
          {users.map((user) => (
            <div key={user.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Repositories: {user.public_repos || 'N/A'}</p>
              <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
