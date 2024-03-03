import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  refreshUser,
  logOut,
  addDailyNorma,
  updateAvatar,
  changeSettings,
} from './operations';

const initialState = {
  user: { name: '', email: '', gender: '', dailyNorma: 0 },
  avatarURL: '',
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.avatarURL = action.payload.avatarURL;
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
        state.dailyNorma = action.payload.dailyNorma;
        state.avatarURL = action.payload.avatarURL;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '', gender: '', dailyNorma: 0 };
        state.token = null;
        state.isLoggedIn = false;
        state.avatarURL = '';
      })
      .addCase(logOut.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addDailyNorma.pending, (state, action) => {
        state.isRefreshing = true;
      })

      .addCase(addDailyNorma.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload.dailyNorma;
      })
      .addCase(addDailyNorma.rejected, handleRejected)

      .addCase(updateAvatar.pending, (state, action) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.avatarURL = action.payload.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        handleRejected(state, action);
      })

      .addCase(changeSettings.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(changeSettings.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(changeSettings.rejected, (state, action) => {
        handleRejected(state, action);
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

export const authReducer = authSlice.reducer;
