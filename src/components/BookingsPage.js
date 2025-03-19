import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBookings } from "../reduxconfig/BookingSlice";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";
import PageNation from "./Pagination";

export default function BookingsPage() {
  useEffect(() => {
    loadBooking();
  }, []);
  const dispatch = useDispatch();
  const [booking, setBooking] = useState([]);
  const [orderId, setOrderId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const { user } = useSelector((state) => state.user.value);
  const { attachDetail } = useSelector((state) => state.attach.value);
  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };
  const bookingCopy = booking.slice(indexOfFirstPost, indexOfLastPost);

  const loadBooking = async () => {
    try {
      let response = await WebService.getApi(WebApi.BOOKING_VEHICLE);
      if (response.data.status) {
        setBooking(
          response.data.bookings.filter(
            (data) =>
              data.biding.filter((element) => element.driverId == user._id)
                .length == 0
          )
        );
        dispatch(
          setBookings(
            response.data.bookings.filter(
              (data) =>
                data.biding.filter((element) => element.driverId == user._id)
                  .length == 0
            )
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const acceptOrder = (e) => {
    console.log(e.target.value);
    navigate("/index-driver/accept-order", {
      state: { orderId: e.target.value },
    });
  };
  return (
    <div>
      <div className="col-md-12 col-xl-12 mt-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Bookings</h3>
            <table className="table">
              <thead>
                <th>S No.</th>
                <th>Name</th>
                <th>Pick-Up Location</th>
                <th>Delevery Location</th>
                <th></th>
              </thead>
              <tbody>
                {bookingCopy.map((book, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{book.userId.name}</td>
                    <td>{book.pickUpLocation}</td>
                    <td>{book.deliveryLocation}</td>
                    <td>
                      <button
                        type="button"
                        value={book._id}
                        onClick={acceptOrder}
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <PageNation
              postPerPage={postPerPage}
              totalPosts={booking.length}
              paginate={paginate}
            />
            <div className="m-auto col-md-5">
              <button onClick className="btn btn-danger btn-block">
                View Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
