import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import bookingReducer from "./BookingSlice";
import driverDetailReducer from "./DriverDetailSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    attach: driverDetailReducer,
  },
});
export default store;
