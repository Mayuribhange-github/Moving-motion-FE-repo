import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: {},
      token: "",
      isLogIn: false,
      message: "",
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.value.user = action.payload;
      state.value.isLogIn = true;
    },
    setToken: (state, action) => {
      state.value.token = action.payload;
    },
    logOut: (state, action) => {
      state.value.user = {};
      state.value.isLogIn = false;
      state.value.token = "";
      state.value.message = "";
    },
    setMessage: (state, action) => {
      state.value.message = action.payload;
    },
  },
});
export const { setCurrentUser, logOut, setMessage, setToken } = slice.actions;
export default slice.reducer;
