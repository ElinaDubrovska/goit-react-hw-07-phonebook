import axios from 'axios';
axios.defaults.baseURL = 'https://6478a755362560649a2e347a.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}