import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

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
  async ({ id, updatedWater }, thunkAPI) => {
    try {
      const response = await axios.put(`/waternotes/${id}`, updatedWater);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (waterId, thunkAPI) => {
    try {
      const response = await axios.delete(`/waternotes/${waterId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
