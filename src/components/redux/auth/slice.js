import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, refreshUser } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const handleRejected = (state, action) => {
    alert(action.payload);
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
    builder
       .addCase(signUp.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        })
        .addCase(signIn.rejected, (state, action) => {
            handleRejected (state, action)
        })
        .addCase(signUp.rejected, (state, action) => {
            handleRejected (state, action)   
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
    },
});

export const authReducer = authSlice.reducer;