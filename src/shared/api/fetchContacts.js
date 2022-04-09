import axios from 'axios';

// const instance = axios.create({
//   // baseURL: 'https://624d69a6c172b69d69329be0.mockapi.io',
// });

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = async (userToken) => {
  console.log('GET:', userToken);
  const { data } = await axios.get('/contacts', userToken);
  return data;
};

const addContact = async data => {
  console.log('ADD:', data);
  const { data: result } = await axios.post('/contacts', data);
  return result;
};

const removeContact = async contactId => {
  const { data: result } = await axios.delete(`/contacts/${contactId}`);
  console.log('REMOVE:', result.id);
  return result.id;
};

const services = {
  getContacts,
  addContact,
  removeContact,
};

export default services;
