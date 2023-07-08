import { createSlice } from "@reduxjs/toolkit";

const userdata = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  user: undefined,
  isRegisterSuccess: false,
  accessToken: undefined,
};

if (userdata) {
  initialState.user = userdata;
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
