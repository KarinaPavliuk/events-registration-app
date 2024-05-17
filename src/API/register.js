import axios from 'axios';

axios.defaults.baseURL = 'https://events-registration-api.onrender.com/';

export const register = async body => {
  try {
    const { data } = await axios.post('api/register/', body);
    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const getUsers = async () => {
  const { data } = await axios.get('api/register/');
  return data;
};
