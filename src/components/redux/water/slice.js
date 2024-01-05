import { createSlice } from '@reduxjs/toolkit';
import {
  findWaterToday,
  addWater,
  updateWater,
  deleteWater,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  items: {},
  isLoading: false,
  error: null,
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

function isPendingAction(action) {
  return typeof action.type === 'string' && action.type.endsWith('/pending');
}
function isFulfilledAction(action) {
  return typeof action.type === 'string' && action.type.endsWith('/fulfilled');
}
function isRejectedAction(action) {
  return typeof action.type === 'string' && action.type.endsWith('/rejected');
}
const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(findWaterToday.pending, state => {})
      .addCase(findWaterToday.fulfilled, (state, action) => {

        state.items = action.payload;
        //"?"
      })
      .addCase(findWaterToday.rejected, handleRejected)
      .addCase(addWater.fulfilled, (state, action) => {
        state.items.notes.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(updateWater.fulfilled, (state, action) => {
        state.items.notes = state.items.notes.map(water =>

          water.id === action.payload.id ? action.payload : water
        );
        //"?"
      })
      .addCase(updateWater.rejected, handleRejected)
      .addCase(deleteWater.fulfilled, (state, action) => {
        const index = state.items.notes.findIndex(

          water => water.id === action.payload.id
        );
        state.items.notes.splice(index, 1);
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.items = [];
      })
      .addMatcher(isPendingAction, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isFulfilledAction, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const waterReducer = waterSlice.reducer;
