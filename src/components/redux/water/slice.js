import { createSlice } from '@reduxjs/toolkit';
import {
  findWaterToday,
  addWater,
  updateWater,
  deleteWater,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(findWaterToday.pending, state => {
        state.isLoading = true;
      })
      .addCase(findWaterToday.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        //"?"
      })
      .addCase(findWaterToday.rejected, handleRejected)
      .addCase(addWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(updateWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(water =>
          water.id === action.payload.id ? action.payload : water
        );
        //"?"
      })
      .addCase(updateWater.rejected, handleRejected)
      .addCase(deleteWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          water => water.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const waterReducer = waterSlice.reducer;
