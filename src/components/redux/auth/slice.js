import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, refreshUser, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  icon: null,
  isLoading: false,
};

const handleRejected = (state, action) => {
  alert(action.payload);
  state.isLoading = false;
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.icon = action.payload.avatarURL;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.icon = action.payload.avatarURL;
      })
      .addCase(signIn.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(signUp.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addMatcher(isPendingAction, (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isFulfilledAction, (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
