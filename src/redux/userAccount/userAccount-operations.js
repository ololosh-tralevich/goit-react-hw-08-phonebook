import { createAsyncThunk } from '@reduxjs/toolkit';

import userApi from '../../shared/api/userApi';

const signup = createAsyncThunk(
  'users/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await userApi.signup(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const login = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await userApi.login(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const logout = createAsyncThunk(
  'users/logout',
  async (userData, { rejectWithValue }) => {
    try {
      const result = await userApi.logout(userData);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const currentUser = createAsyncThunk(
  'users/current',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const result = await userApi.currentUser(user.token);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
        return false;
      }
    },
  }
);

export const userOperations = {
  signup,
  login,
  logout,
  currentUser,
};

