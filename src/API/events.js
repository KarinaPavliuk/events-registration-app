import axios from 'axios';

axios.defaults.baseURL = 'https://events-registration-api.onrender.com/';

export const getEvents = async () => {
  const { data } = await axios('api/events/');
  console.log(data);
  return data;
};
