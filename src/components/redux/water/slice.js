import { createSlice } from '@reduxjs/toolkit';
import {
  findWaterToday,
  addWater,
  updateWater,
  deleteWater,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  notes: [],
  isLoading: false,
  error: null,
};

const handleRejected = (state, action) => {
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
      .addCase(findWaterToday.fulfilled, (state, action) => {
        state.notes = action.payload.notes;
      })
      .addCase(findWaterToday.rejected, handleRejected)
      .addCase(addWater.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(updateWater.fulfilled, (state, action) => {
        const updatedWater = action.payload;
        const index = state.notes.findIndex(
          water => water._id === updatedWater._id
        );
        state.notes[index] = updatedWater;
      })
      .addCase(updateWater.rejected, handleRejected)
      .addCase(deleteWater.fulfilled, (state, action) => {
        const index = state.notes.findIndex(
          water => water._id === action.payload.id
        );
        state.notes.splice(index, 1);
      })
      .addCase(deleteWater.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.notes = [];
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
