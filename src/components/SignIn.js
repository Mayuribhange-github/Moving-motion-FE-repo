import React, { useState } from "react";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setToken } from "../reduxconfig/UserSlice";
import { Link, useNavigate } from "react-router-dom";
import { setAttachDetail } from "../reduxconfig/DriverDetailSlice";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    let detail = {
      email: email,
      password: password,
    };
    console.log(email + " " + password);
    try {
      let response = await WebService.postApi(WebApi.USER_SIGNIN, {
        ...detail,
      });
      if (response.data.status) {
        dispatch(setCurrentUser(response.data.userDetail));
        dispatch(setToken(response.data.token));
        localStorage.setItem("userDetail", response.data.userDetail);
        if (response.data.userDetail.customerType == "Customer") {
          navigate("/index-user");
        } else {
          let newResponse = await WebService.getApi(WebApi.ATTACH_VEHICLE, {
            params: { id: response.data.userDetail._id },
          });
          if (newResponse.data.result) {
            dispatch(setAttachDetail(newResponse.data.result));
            navigate("/index-driver");
          } else {
            navigate("/attach-vehicle");
          }
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Invalid User-Email or Password");
    }
  };
  return (
    <div>
      <section
        className="h-100 h-custom"
        style={{
          backgroundImage: "url(/images/img_4.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="container pb-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className=" col-md-6">
              <div className="card rounded-3 mt-5">
                <img
                  src="/images/img3.webp"
                  className="w-100"
                  style={{
                    borderTopLeftRadius: ".3rem",
                    borderTopRightRadius: ".3rem",
                  }}
                  alt="Samplephoto"
                />
                <div className="card-body p-4">
                  <h3 className="mb-4 pb-2 pb-md-0 text-center px-md-2">
                    Sign-In
                  </h3>
                  <ToastContainer />
                  <form onSubmit={signIn} className="px-md-2 col-md-8 m-auto">
                    <div className="row mb-4">
                      <div className="col-md-12 ">
                        <label>Email</label>
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-12 mt-2">
                        <label>Password</label>
                        <input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-success ">
                        Login
                      </button>
                    </div>
                  </form>
                  <Link
                    to="/forget-password"
                    className="nav-link text-info float-right"
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
