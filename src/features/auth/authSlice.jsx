import { createSlice } from "@reduxjs/toolkit";

const userdata = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  user: "",
  isRegisterSuccess: false,
};

if (userdata) {
  initialState.user = userdata;
}

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
