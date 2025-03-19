import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";

export default function History() {
  useEffect(() => {
    loadHistory();
  }, []);
  const { user } = useSelector((state) => state.user.value);
  const [details, setDetails] = useState([]);
  const loadHistory = async () => {
    let response = await WebService.getApi(
      WebApi.COMPLETE_ORDERS + "/" + user._id
    );
    setDetails(response.data.result);
  };
  console.log(details);
  return (
    <div>
      {details.map((bookings) => (
        <>
          <div className="card mt-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <h6>Delivery Location :</h6>
                </div>
                <div className="col-md-3 ">
                  <h6>{bookings.deliveryLocation}</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Pick Up Location :</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>{bookings.pickUpLocation}</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Destination Contact : </h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>{bookings.destinationContact}</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Pick Up Contact :</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>{bookings.pickUpContact}</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Pick Up Date : </h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>{bookings.pickUpDate}</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Driver Name : </h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>{bookings.driverDetail[0].driverName}</h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>Price : </h6>
                </div>
                <div className="col-md-3 col-sm-3">
                  <h6>{bookings.driverDetail[0].Price}</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
