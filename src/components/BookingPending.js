import React from "react";
import { toast } from "react-toastify";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";

export default function BookingPending({ bookings, setBookings }) {
  const cancelOrder = async () => {
    if (window.confirm("Are you Sure?")) {
      try {
        let data = {
          pickUpLocation: bookings.pickUpContact,
          pickUpContact: bookings.pickUpContact,
          deliveryLocation: bookings.deliveryLocation,
          destinationContact: bookings.destinationContact,
          pickUpDate: bookings.pickUpDate,
          userId: bookings.userId,
        };

        let response = await WebService.postApi(WebApi.CANCEL_ORDER, {
          ...data,
        });

        if (response.data.status) {
          setBookings("");
        }
        toast.warning("Your order has cancelled");
      } catch (error) {
        console.log(error);
        toast.error("please try again");
      }
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-5 col-sm-5">
              <h6>Status</h6>
            </div>
            <div className="col-md-1">:</div>
            <div className="col-md-4 col-sm-4">
              <h6 className="text-success">
                {bookings.biding.length ? (
                  <span>{bookings.biding.length} Response</span>
                ) : (
                  <span>Pending</span>
                )}
              </h6>
            </div>
            <div className="col-md-2 ">
              <button onClick={cancelOrder} className="btn btn-sm btn-danger">
                Cancel Order
              </button>
            </div>
            <div className="col-md-5">
              <h6>Delivery Location </h6>
            </div>
            <div className="col-md-1">:</div>
            <div className="col-md-6 ">
              <h6>{bookings.deliveryLocation}</h6>
            </div>
            <div className="col-md-5 col-sm-5">
              <h6>Destination Contact </h6>
            </div>
            <div className="col-md-1">:</div>
            <div className="col-md-6 col-sm-6">
              <h6>{bookings.destinationContact}</h6>
            </div>
            <div className="col-md-5 col-sm-5">
              <h6>Pick Up Contact </h6>
            </div>
            <div className="col-md-1">:</div>
            <div className="col-md-6 col-sm-6">
              <h6>{bookings.pickUpContact}</h6>
            </div>
            <div className="col-md-5 col-sm-5">
              <h6>Pick Up Date </h6>
            </div>
            <div className="col-md-1">:</div>
            <div className="col-md-6 col-sm-6">
              <h6>{bookings.pickUpDate}</h6>
            </div>
            <div className="col-md-5 col-sm-5">
              <h6>Pick Up Location </h6>
            </div>
            <div className="col-md-1">:</div>
            <div className="col-md-6 col-sm-6">
              <h6>{bookings.pickUpLocation}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
