import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

export const fetchWater = createAsyncThunk(
  'water/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/waternotes');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const findWaterToday = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/waternotes/today`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/add',
  async (newWater, thunkAPI) => {
    try {
      const response = await axios.post('/waternotes', newWater);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/update',
  async ({ id, amount, time }, thunkAPI) => {
    try {
      const response = await axios.put(`/waternotes/${id}`, { amount, time });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (deleteId, thunkAPI) => {
    try {
      const response = await axios.delete(`/waternotes/${deleteId}`);
      return { data: response.data, id: deleteId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
