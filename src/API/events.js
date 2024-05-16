import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api/';

export const getData = async () => {
  const { data } = await axios("contacts");
  return data;
};