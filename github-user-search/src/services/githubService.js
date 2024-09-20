import axios from 'axios';

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch {
    throw new Error('User not found');
  }
};
