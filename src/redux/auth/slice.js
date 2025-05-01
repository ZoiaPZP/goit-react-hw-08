import { createSlice } from "@reduxjs/toolkit";
import {
  refreshUser,
  register as registerUser,
  login as logInUser,
  logout as logOutUser,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
 
  if (action.type === refreshUser.rejected.type) return;
  state.isLoading = false;
  state.error = action.error.message;
};

const handleRefreshPending = (state) => {
  state.isRefreshing = true;
  state.error = null;
};

const initialState = {
  token: null,
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.user = payload;
        state.isLoggedIn = true;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addCase(logOutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      .addMatcher(
        (action) =>
          action.type.endsWith("/pending") &&
          action.type !== refreshUser.pending.type,
        handlePending
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected") &&
          action.type !== refreshUser.rejected.type,
        handleRejected
      );
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;





