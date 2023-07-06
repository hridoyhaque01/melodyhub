import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveSideBar: false,
};

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {
    changeSidebarStatus: (state, action) => {
      state.isActiveSideBar = !state.isActiveSideBar;
    },
  },
});

export default commonSlice.reducer;
export const { changeSidebarStatus } = commonSlice.actions;
