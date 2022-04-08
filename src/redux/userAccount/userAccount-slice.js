import { createSlice } from '@reduxjs/toolkit';

import { userOperations } from './userAccount-operations';

const { signup, login, logout, currentUser } = userOperations;

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signup.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
    },
    [signup.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = true;
      state.loading = false;
    },

    [logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = '';
      state.isLogin = false;
      state.loading = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },

    [currentUser.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.token = payload.token;
      state.isLogin = true;
      state.loading = false;
    },
    [currentUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
