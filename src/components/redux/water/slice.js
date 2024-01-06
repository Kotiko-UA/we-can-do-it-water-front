import { createSlice } from '@reduxjs/toolkit';
import {
  findWaterToday,
  addWater,
  updateWater,
  deleteWater,
} from './operations';
import { logOut } from '../auth/operations';

const initialState = {
  items: { norma: 0, procent: 0 },
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
        state.items.norma = action.payload.norma;
        state.items.procent = action.payload.procent;
        state.notes = action.payload.notes;
      })
      .addCase(findWaterToday.rejected, handleRejected)
      .addCase(addWater.fulfilled, (state, action) => {
        // state.items.notes.push(action.payload);
        state.notes.push(action.payload);
      })
      .addCase(addWater.rejected, handleRejected)
      .addCase(updateWater.fulfilled, (state, action) => {
        console.log(state);
        console.log(action);

        // state.notes = state.notes.map(water =>
        //   water._id === action.payload.id ? action.payload : water
        // );
        const updatedWater = action.payload;
        const index = state.notes.findIndex(
          water => water._id === updatedWater._id
        );

        // if (index !== -1) {
        state.notes[index] = updatedWater;
        // }
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
        state.items = { norma: 0, procent: 0, notes: [] };
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
