import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { setMessage } from "../reduxconfig/UserSlice";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";
import BookingPending from "./BookingPending";
import NullBookings from "./NullBookings";

export default function Order() {
  useEffect(() => {
    loadOrders();
  }, []);

  const { user } = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState();
  const [driverId, setDriverId] = useState();

  const loadOrders = async () => {
    let response = await WebService.postApi(WebApi.ORDER_STATUS, {
      id: user._id,
    });
    if (response.data.status) {
      setBookings(response.data.bookings);
    }
  };
  const confirmOrder = async (e) => {
    e.preventDefault();
    let response = await WebService.postApi(WebApi.COMPLETE_ORDERS, {
      ...bookings,
      driverId,
    });
    dispatch(
      setMessage(
        "Order SuccessFully Proceed to the Driver Please wait sometime and Check your message Inbox"
      )
    );
    navigate("/index-user");
  };

  console.log(bookings);
  return (
    <div>
      <div className="container">
        <ToastContainer />
        {bookings && (
          <BookingPending bookings={bookings} setBookings={setBookings} />
        )}
        <div className="row wow fadeIn">
          {console.log(bookings)}
          {bookings ? (
            bookings.biding.map((booking, index) => (
              <>
                <div className="col-md-6 col-xl-6 mt-2 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-8 col-sm-8">
                          <h6>Driver Name: {booking.driverName}</h6>
                          <h6>Vehicle Model: {booking.vehicleModel}</h6>
                          <h6>
                            Offered Price:{" "}
                            <span className="text-danger">
                              ₹{booking.Price}
                            </span>
                          </h6>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <img
                            className="img-fluid"
                            src={
                              booking.profileImage &&
                              booking.profileImage != "undefined"
                                ? "http://localhost:6000/images/" +
                                  user.profileImage
                                : "/images/img_2.jpg"
                            }
                          />
                        </div>
                        <div className="col-md-4 col-sm-4">
                          Insurance:{" "}
                          {booking.facility.insurance ? (
                            <h3>&#10003;</h3>
                          ) : (
                            <strong> XXXX</strong>
                          )}
                        </div>
                        <div className="col-md-4 col-sm-4">
                          PUC:
                          {booking.facility.puc ? (
                            <h3>&#10003;</h3>
                          ) : (
                            <strong> XXXX</strong>
                          )}
                        </div>
                        <div className="col-md-4 col-sm-4">
                          Passenger-Seat:{" "}
                          {booking.facility.passengerSeat ? (
                            <h3>&#10003;</h3>
                          ) : (
                            <center>
                              <strong>XXXX</strong>
                            </center>
                          )}
                        </div>
                      </div>
                      <button
                        value={booking.driverId}
                        onClick={(e) => setDriverId(e.target.value)}
                        type="button"
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Accept
                      </button>

                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header text-center">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Moving Motion
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <form>
                              <div className="modal-body">
                                <div className="container">
                                  <div className="row"></div>
                                </div>
                                <h5>Do you want to confirm order?</h5>
                                <br />
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  {" "}
                                  No{" "}
                                </button>
                                <button
                                  type="submit"
                                  onClick={confirmOrder}
                                  data-dismiss="modal"
                                  className="btn btn-success"
                                >
                                  {" "}
                                  Yes{" "}
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
          ) : (
            <NullBookings />
          )}
        </div>
      </div>
    </div>
  );
}
