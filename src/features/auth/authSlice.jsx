import { createSlice } from "@reduxjs/toolkit";

// Retrieve data from localStorage

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  user: undefined,
  isRegisterSuccess: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
