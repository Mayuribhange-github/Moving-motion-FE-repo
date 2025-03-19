import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { setBookings } from "../reduxconfig/BookingSlice";
import { setAttachDetail } from "../reduxconfig/DriverDetailSlice";
import { logOut, setMessage } from "../reduxconfig/UserSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogIn, message, user } = useSelector((state) => state.user.value);

  useEffect(() => {
    message && toast.success(message);
    dispatch(setMessage(""));
  }, []);

  const signOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    dispatch(setAttachDetail([]));
    dispatch(setBookings([]));
    navigate("/");
  };
  return (
    <div>
      <nav
        style={{ backgroundColor: "#F08000" }}
        className="navbar navbar-expand-lg navbar-dark orange  lighten-1"
      >
        <Link className="navbar-brand " to="/">
          <img
            src="/images/logo2.jpg"
            style={{ height: "60px", width: "80px", position: "relative" }}
          />{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse  navbar-collapse "
          id="navbarSupportedContent-555"
        >
          <ul
            style={{ justifyContent: "space-evenly" }}
            className="navbar-nav text-uppercase  m-auto"
          >
            {!isLogIn && (
              <li key={1}>
                <Link to="/" className="nav-link  ">
                  Home
                </Link>
              </li>
            )}
            {!isLogIn && (
              <li key={2}>
                <Link to="" className="nav-link">
                  Services
                </Link>
              </li>
            )}
            {!isLogIn && (
              <li key={3}>
                <Link to="" className="nav-link">
                  Contact
                </Link>
              </li>
            )}
            {!isLogIn && (
              <li key={4}>
                <Link to="/signin" className="nav-link">
                  Sign-in
                </Link>
              </li>
            )}
            {!isLogIn && (
              <li key={5}>
                <Link to="/signup" className="nav-link">
                  Sign-up
                </Link>
              </li>
            )}

            {isLogIn && user.customerType == "Customer" && (
              <li key={6}>
                <Link to="/index-user" className="nav-link">
                  Book vehicle
                </Link>
              </li>
            )}
            {isLogIn && user.customerType == "Customer" && (
              <li key={7}>
                <Link to="/index-user/order-status" className="nav-link">
                  Order Status
                </Link>
              </li>
            )}
            {isLogIn && user.customerType == "Customer" && (
              <li key={10}>
                <Link to="/index-user/history" className="nav-link">
                  History
                </Link>
              </li>
            )}
            {isLogIn && user.customerType == "VehicleOwner" && (
              <li key={8}>
                <Link to="/index-driver" className="nav-link">
                  Bookings
                </Link>
              </li>
            )}
            {isLogIn && (
              <li key={9}>
                <a onClick={signOut} href="" className="nav-link">
                  Sign-Out
                </a>
              </li>
            )}
          </ul>

          <ToastContainer />
          <ul className="navbar-nav ml-auto font-weight-bold  nav-flex-icons">
            {isLogIn && (
              <li>
                <Link to="/index-user/profile" className="nav-link text-white">
                  {user.name}
                </Link>
              </li>
            )}
            {isLogIn && (
              <li className="nav-item avatar">
                <Link to="/index-user/profile">
                  <img
                    src={
                      user.profileImage && user.profileImage != "undefined"
                        ? "http://localhost:6000/images/" + user.profileImage
                        : "/images/img_4.jpg"
                    }
                    width="50px"
                    height="50px"
                    style={{ borderRadius: "50%" }}
                  />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
