import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: authReducer,
    // Add your other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(apiSlice.middleware),
});

export default store;
