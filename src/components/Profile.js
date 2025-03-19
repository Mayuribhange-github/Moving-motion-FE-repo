import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setMessage } from "../reduxconfig/UserSlice";

export default function Profile() {
  const { user, message } = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    message && toast.success(message);
    dispatch(setMessage(""));
  }, []);
  const editProfile = () => {
    navigate("/index-user/editprofile");
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src={
                  user.profileImage && user.profileImage != "undefined"
                    ? "http://localhost:6000/images/" + user.profileImage
                    : "/images/img_3.jpg"
                }
                style={{ height: "90%", width: "90%", borderRadius: "50%" }}
                className="img fluid"
              />
            </div>
            <div className="col-md-10 "></div>
            <div className="col-md-2"></div>
            <div className="col-md-10 ">
              <div className="row">
                <div className="col-md-5 col-sm-3">
                  <h6>Name</h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-4 col-sm-4">
                  <h6 className="text-success">{user.name}</h6>
                </div>
                <div className="col-md-5">
                  <h6>Contact No.</h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-4 ">
                  <h6>{user.contact}</h6>
                </div>
                <div className="col-md-5 col-sm-5">
                  <h6>Email </h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-6 col-sm-6">
                  <h6>{user.email}</h6>
                </div>
                <div className="col-md-5 col-sm-5">
                  <h6>Customer Type </h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-6 col-sm-6">
                  <h6>{user.customerType}</h6>
                </div>
                <div className="col-md-4 col-sm-4 mt-5">
                  <button
                    className="btn btn-block btn-warning"
                    onClick={editProfile}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
