import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";
export default function AcceptOrder() {
  const [insurance, setInsurance] = useState(true);
  const [puc, setPUC] = useState(true);
  const [passengerSeat, setPassengerSeat] = useState(false);
  const [remark, setRemark] = useState("");
  const [price, setPrice] = useState();
  const [orderId, setOrderId] = useState();
  const { user } = useSelector((state) => state.user.value);
  const { attachDetail } = useSelector((state) => state.attach.value);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setOrderId(location.state.orderId);
  }, []);

  const getInsuranceValue = (value) => {
    if (value.checked) {
      setInsurance(true);
    } else setInsurance(false);
  };
  const getPUCValue = (value) => {
    if (value.checked) {
      setPUC(true);
    } else setPUC(false);
  };
  const getSeatValue = (value) => {
    if (value.checked) {
      setPassengerSeat(true);
    } else setPassengerSeat(false);
  };
  const proceedToOrder = async (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    let response = await WebService.postApi(WebApi.ADD_BID, {
      orderId,
      driverId: user._id,
      driverName: attachDetail.driverName,
      Price: price,
      vehicleModel: attachDetail.vehicleModel,
      driverNumber: user.contact,
      vehicleNumber: attachDetail.vehicleNumber,
      facility: { insurance, puc, passengerSeat, remark },
    });
    if (response.data.status) {
      setPrice("");
      setRemark("");
      toast.success("successfully Bid");
      console.log(response.data);
      navigate("/index-driver");
    }
  };
  const cancel = () => {
    navigate("/index-driver");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-sm-6 m-auto mb-4">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-1">
                        <input
                          onChange={(e) => getInsuranceValue(e.target)}
                          id="insurance"
                          defaultChecked
                          type="checkbox"
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="insurance">Insurance</label>
                      </div>
                      <div className="col-md-1">
                        <input
                          onChange={(e) => getPUCValue(e.target)}
                          id="puc"
                          defaultChecked
                          type="checkbox"
                        />
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="puc">PUC</label>
                      </div>
                      <div className="col-md-1">
                        <input
                          onChange={(e) => getSeatValue(e.target)}
                          id="seat"
                          type="checkbox"
                        />
                      </div>
                      <div className="col-md-4 mb-2">
                        <label htmlFor="seat">Passenger seat</label>
                      </div>
                      <input
                        type="text"
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                        placeholder="Remark"
                        className="form-control mb-2"
                      />
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Price"
                        className="form-control mb-4"
                      />
                      <h5>Do you want to confirm order?</h5>
                      <br />
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={cancel}
                      >
                        {" "}
                        No{" "}
                      </button>
                      <button
                        onClick={proceedToOrder}
                        type="submit"
                        disabled={!price}
                        className="btn btn-success"
                      >
                        {" "}
                        Yes{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
