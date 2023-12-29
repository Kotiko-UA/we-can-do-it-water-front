import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentiials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentiials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const forgetPass = createAsyncThunk('auth/signup');

export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDailyNorma = createAsyncThunk(
  'water/addDailyNorma',
  async (drinkValue, thunkAPI) => {
    try {
      const response = await axios.patch('/users/updateDailyNorma', { dailyNorma: String(drinkValue) });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


