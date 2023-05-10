import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://644860b1b88a78a8f0eb997f.mockapi.io'
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
      return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, number}, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', { name, number });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${ contactId }`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);