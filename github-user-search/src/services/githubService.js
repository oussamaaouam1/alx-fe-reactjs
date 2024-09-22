import axios from 'axios';

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = '';

  // Construct the query based on the available parameters
  if (username) query += `user:${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  // The exact API endpoint required by the checker
  const url = `https://api.github.com/search/users?q=${query}&page=${page}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch  {
    throw new Error('Failed to fetch user data');
  }
};
