import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://water-p2oh.onrender.com/api';

export const fetchWater = createAsyncThunk(
  'water/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/waterNotes');
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
      const response = await axios.get(`/waterNotes/today`);
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
      const response = await axios.post('/waterNotes', newWater);
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
      const response = await axios.put(`/waterNotes/${id}`, updatedWater);
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
      const response = await axios.delete(`/waterNotes/${waterId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
