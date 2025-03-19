import React from "react";
import { Route, Routes } from "react-router-dom";
import BackgroundBlock from "./components/BackgroundBlock";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SiteMobile from "./components/Site-Mobile";
import IndexPage from "./components/IndexPage";
import DriverIndexPage from "./components/DriverIndexPage";
import AttachVehicleForm from "./components/AttachVehicleForm";
import BookingForm from "./components/BookingForm";
import Order from "./components/Order";
import ProtectedRoute from "./components/ProtectedRoute";
import BookingsPage from "./components/BookingsPage";
import Profile from "./components/Profile";
import Header from "./components/Header";
import EditProfile from "./components/EditProfile";
import AcceptOrder from "./components/AcceptOrder";
import History from "./components/History";
import ForgetPassword from "./components/ForgetPassword";
import Otp from "./components/Otp";
import PaymentForm from "./components/Payment";

export default function App() {
  return (
    <>
      <SiteMobile />
      <Header />
      {/* <Routes> */}
      <Routes>
        <Route path="/payment" element={<PaymentForm />} />
        <Route
          path="/attach-vehicle"
          element={
            <ProtectedRoute>
              <AttachVehicleForm />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route
          path="/index-user"
          element={
            <ProtectedRoute>
              <IndexPage />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <BookingForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="order-status"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          />
          <Route path="history" element={<History />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="editprofile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/index-driver"
          element={
            <ProtectedRoute>
              <DriverIndexPage />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <ProtectedRoute>
                <BookingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="accept-order"
            element={
              <ProtectedRoute>
                <AcceptOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="editprofile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/" element={<BackgroundBlock />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
