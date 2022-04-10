import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = async () => {
  console.log('GET Contacts');
  const { data } = await axios.get('/contacts');
  return data;
};

const addContact = async data => {
  console.log('ADD:', data);
  const { data: result } = await axios.post('/contacts', data);
  return result;
};

const removeContact = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
  console.log('REMOVE Contact');
  return contactId;
};

const services = {
  getContacts,
  addContact,
  removeContact,
};

export default services;
