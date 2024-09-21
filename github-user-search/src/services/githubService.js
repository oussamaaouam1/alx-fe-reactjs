import axios from 'axios';

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = `q=${username ? `user:${username}` : ''}`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?${query}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch  {
    throw new Error('Failed to fetch user data');
  }
};
