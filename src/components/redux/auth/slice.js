import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  refreshUser,
  logOut,
  addDailyNorma,
} from './operations';

const initialState = {
  user: { name: null, email: null},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  icon: null,
  isLoading: false,
  dailyNorma: 2,
};

const handlePending = state => {
  state.isLoading = true;
};
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const handleRejected = (state, action) => {
  alert(action.payload);
};

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
        state.dailyNorma = action.payload.dailyNorma;
      
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
      });
  },
});

console.log(authSlice);
// console.log(state.icon)

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addDailyNorma.pending, handlePending)
      .addCase(addDailyNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyNorma = action.payload.dailyNorma;
      })
      .addCase(addDailyNorma.rejected, handleRejected)

  },
});

export const authReducer = authSlice.reducer;
export const waterReducer = waterSlice.reducer;
