import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "booking",
  initialState: {
    value: {
      bookings: [],
    },
  },
  reducers: {
    setBookings: (state, action) => {
      state.value.bookings = action.payload;
    },
  },
});
export const { setBookings } = slice.actions;
export default slice.reducer;
