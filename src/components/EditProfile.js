import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setCurrentUser, setMessage } from "../reduxconfig/UserSlice";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";

export default function EditProfile() {
  const { user } = useSelector((state) => state.user.value);
  const [profileImage, setProfileImage] = useState();
  const [name, setName] = useState(user.name);
  const [contact, setContact] = useState(user.contact);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cancelUpdate = () => {
    navigate("/index-user/profile");
  };
  const getProfileImage = (e) => {
    setProfileImage(e.target.files[0]);
  };
  const update = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("profileImage", profileImage);
    formData.set("id", user._id);
    formData.set("name", name);
    formData.set("contact", contact);
    formData.set("email", email);
    try {
      let response = await WebService.postApi(WebApi.USER_UPDATE, formData);
      if (response.data.status) {
        dispatch(setMessage("successfull update profile"));
        dispatch(setCurrentUser(response.data.userDetail));
        navigate("/index-user/profile");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="container">
            <form className="form-group">
              <div className="row">
                <div className="col-md-5 col-sm-3">
                  <h6>Profile Image :</h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-5 col-sm-5 mb-3">
                  <input
                    onChange={getProfileImage}
                    class="form-control"
                    type="file"
                  />
                </div>

                <div className="col-md-5 col-sm-3">
                  <h6>Name</h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-5 col-sm-5 mb-3">
                  <input
                    defaultValue={user.name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>

                <div className="col-md-5">
                  <h6>Contact No.</h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-5 col-sm-5 mb-3">
                  <input
                    type="text"
                    defaultValue={user.contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-5 col-sm-5">
                  <h6>Email </h6>
                </div>
                <div className="col-md-1">:</div>
                <div className="col-md-5 col-sm-5 mb-3">
                  <input
                    type="text"
                    defaultValue={user.email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="col-md-3 col-sm-3 m-auto">
                  <button
                    className="btn btn-block btn-warning"
                    onClick={cancelUpdate}
                  >
                    Cancel{" "}
                  </button>
                </div>
                <div className="col-md-3 col-sm-3 m-auto">
                  <button
                    className="btn btn-block btn-success"
                    type="submit"
                    onClick={update}
                  >
                    Update{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* // </div> */}
    </div>
  );
}
