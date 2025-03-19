import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "attach",
  initialState: {
    value: {
      attachDetail: {},
    },
  },
  reducers: {
    setAttachDetail: (state, action) => {
      state.value.attachDetail = action.payload;
      console.log(action.payload);
    },
  },
});
export const { setAttachDetail } = slice.actions;
export default slice.reducer;
