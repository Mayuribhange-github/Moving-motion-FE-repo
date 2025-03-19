import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setMessage } from "../reduxconfig/UserSlice";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";
export default function BookingForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    message && toast.success(message);
    dispatch(setMessage(""));
  }, []);
  const { user, message } = useSelector((state) => state.user.value);
  const [pickUpLocation, setPickUpLocation] = useState();
  const [pickUpContact, setPickUpContact] = useState();
  const [deliveryLocation, setDeliveryLocation] = useState();
  const [destinationContact, setDestinationContact] = useState();
  const [pickUpDate, setPickUpDate] = useState();
  const mindate = new Date();
  let minimumDate =
    mindate.getFullYear() +
    "-" +
    mindate.getMonth() +
    1 +
    "-" +
    mindate.getDate();
  const bookVehicle = async (e) => {
    e.preventDefault();
    try {
      let response = await WebService.postApi(WebApi.BOOKING_VEHICLE, {
        userId: user._id,
        pickUpContact,
        pickUpDate,
        pickUpLocation,
        deliveryLocation,
        destinationContact,
      });

      if (response.data.status) {
        e.target.reset();
        setPickUpContact("");
        setPickUpDate("");
        setPickUpLocation("");
        setDeliveryLocation("");
        setDestinationContact("");
        toast.success("booking successfully, Please wait for Drivers Response");
      } else toast.error("Booking Failed");
    } catch (err) {
      console.log(err);
      toast.error("Booking Failed");
    }
  };
  return (
    <div>
      <ToastContainer />

      <div className="col-md-10 col-xl-10 col-sm-10  m-auto mb-4">
        <div className="card">
          <div className="card-body">
            <form className="form-group" onSubmit={bookVehicle}>
              <h3 className="dark-grey-text text-center">
                <strong>Book - Vehicle</strong>
              </h3>
              <hr />
              <div className="md-form">
                <label>Pick-up Location</label>
                <input
                  type="text"
                  onChange={(e) => setPickUpLocation(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-form">
                <label htmlFor="form2">Pick-up Contact</label>
                <input
                  type="text"
                  onChange={(e) => setPickUpContact(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-form">
                <label htmlFor="form2">Delivery Location</label>
                <input
                  type="text"
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-form">
                <label htmlFor="form2">Destination Contact</label>
                <input
                  type="text"
                  onChange={(e) => setDestinationContact(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="md-form">
                <label htmlFor="form2">Pick-up Date</label>
                <input
                  type="date"
                  min={minimumDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <button
                  disabled={
                    !pickUpContact ||
                    !pickUpDate ||
                    !pickUpLocation ||
                    !deliveryLocation ||
                    !destinationContact
                  }
                  className="btn btn-success btn-block"
                >
                  Proceed
                </button>
                <hr />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
