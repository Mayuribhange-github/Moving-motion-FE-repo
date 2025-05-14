import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAttachDetail } from "../reduxconfig/DriverDetailSlice";
import { setMessage } from "../reduxconfig/UserSlice";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";

export default function AttachVehicleForm() {
  const [ownerName, setOwnerName] = useState();
  const [driverName, setDriverName] = useState();
  const [adharNumber, setAdharNumber] = useState();
  const [vehicleNumber, setVehicleNumber] = useState();
  const [vehicleModel, setVehicleModel] = useState();
  const [driverPhoto, setDriverPhoto] = useState();
  const [licence, setLicence] = useState();
  const [fitness, setFitness] = useState();
  const [RC, setRC] = useState();
  const [PUC, setPUC] = useState();
  const [insurance, setInsurance] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.value);

  const getLicence = (e) => {
    setLicence(e.target.files[0]);
  };
  const getFitness = (e) => {
    setFitness(e.target.files[0]);
  };
  const getDriverPhoto = (e) => {
    setDriverPhoto(e.target.files[0]);
  };
  const getRC = (e) => {
    setRC(e.target.files[0]);
  };
  const getPUC = (e) => {
    setPUC(e.target.files[0]);
  };
  const getInsurance = (e) => {
    setInsurance(e.target.files[0]);
  };
  const save = async (e) => {
    e.preventDefault();
    console.log([
      ownerName,
      driverName,
      adharNumber,
      vehicleModel,
      vehicleNumber,
    ]);

    let data = new FormData();
    data.append("Images", licence);
    data.append("Images", fitness);
    data.append("Images", driverPhoto);
    data.append("Images", RC);
    data.append("Images", PUC);
    data.append("Images", insurance);
    data.set("ownerName", ownerName);
    data.set("driverName", driverName);
    data.set("adharNumber", adharNumber);
    data.set("vehicleModel", vehicleModel);
    data.set("vehicleNumber", vehicleNumber);
    data.set("driverId", user._id);
    try {
      let response = await WebService.postApi(WebApi.ATTACH_VEHICLE, data);
      if (response.data.status) {
        dispatch(setMessage("Vehicle Add SuccessFully"));
        dispatch(setAttachDetail(response.data.result));
        navigate("/index-driver");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
      e.target.reset();
    }
  };
  return (
    <div>
      <div
        className="view full-page-intro"
        style={{
          backgroundImage: "url('/images/img_8.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-md-6 col-xl-6 mt-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center">Vehicle Information</h3>
                    <form>
                      <label>Owner Name</label>
                      <input
                        type="text"
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="form-control mb-3"
                      />
                      <label>Driver Name</label>
                      <input
                        type="text"
                        onChange={(e) => setDriverName(e.target.value)}
                        className="form-control mb-3"
                      />
                      <label>Adhar Number</label>
                      <input
                        type="text"
                        onChange={(e) => setAdharNumber(e.target.value)}
                        className="form-control mb-3"
                      />
                      <label>Vehicle Number</label>
                      <input
                        type="text"
                        onChange={(e) => setVehicleNumber(e.target.value)}
                        className="form-control mb-3"
                      />
                      <label>Vehicle Model</label>
                      <input
                        type="text"
                        onChange={(e) => setVehicleModel(e.target.value)}
                        className="form-control"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6 mt-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center mb-4 ">Bookings</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <label>Licence :</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            type="File"
                            onChange={getLicence}
                            className="form-control mb-3"
                          />
                        </div>
                        <div className="col-md-4 mb-4">
                          <label>Fitness :</label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="File"
                            onChange={getFitness}
                            className="form-control mb-3"
                          />
                        </div>
                        <div className="col-md-4 mb-4">
                          <label>Insurance:</label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="File"
                            onChange={getInsurance}
                            className="form-control mb-3"
                          />
                        </div>
                        <div className="col-md-4 mb-4">
                          <label>RC :</label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="File"
                            onChange={getRC}
                            className="form-control mb-3"
                          />
                        </div>
                        <div className="col-md-4 mb-4">
                          <label>PUC :</label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="File"
                            onChange={getPUC}
                            className="form-control mb-3"
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label>Driver-Photo :</label>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="File"
                            onChange={getDriverPhoto}
                            className="form-control mb-3"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="m-auto col-md-7 ">
                      <button
                        onClick={save}
                        className="btn btn-danger btn-block mt-4"
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
