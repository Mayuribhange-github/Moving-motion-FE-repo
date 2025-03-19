import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logOut } from "../reduxconfig/UserSlice";
export default function DriverIndexPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div>
      <div id="viewport">
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
                <div></div>
                <div className="col-md col-xl mt-4 mb-4">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
