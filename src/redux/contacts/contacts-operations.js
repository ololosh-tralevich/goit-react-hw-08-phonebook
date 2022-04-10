import { createAsyncThunk } from '@reduxjs/toolkit';

import services from '../../shared/api/fetchContacts';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (userToken, { rejectWithValue }) => {
    try {
      const result = await services.getContacts(userToken);
      return result;
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, rejectWithValue) => {
    try {
      const newContact = await services.addContact(contactData);
      return newContact;
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  },
  {
    condition: (contactData, { getState }) => {
      const { contacts } = getState();
      const { name, number } = contactData;
      const clone = contacts.contacts.find(
        clone => clone.name === name || clone.number === number
      );
      if (clone) {
        alert(`${name} is already in your contacts`);
        return false;
      }
    },
  }
);

const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, rejectWithValue) => {
    try {
      return await services.removeContact(contactId);
    } catch (err) {
      console.log('error');
      return rejectWithValue(err);
    }
  }
);

const operations = {
  fetchContacts,
  addContact,
  removeContact,
};

export default operations;
