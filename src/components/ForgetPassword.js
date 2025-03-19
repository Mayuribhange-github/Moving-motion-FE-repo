import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const forgetpassword = (e) => {
    e.preventDefault();
    navigate("/otp", { state: { email: email } });
  };
  return (
    <section
      className="h-100 h-custom"
      style={{
        backgroundImage: "url(/images/transport1.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container pb-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-6 ">
            <div className="card mt-5">
              <div className="card-body ">
                <div className="row ">
                  <div className="col-md-12">
                    <div className="text-center">
                      <h3>
                        <i className="fa fa-lock fa-4x"></i>
                      </h3>
                      <h2 className="text-center">Forgot Password?</h2>
                      <p>Please Enter your mobile no.</p>
                      <form onSubmit={forgetpassword}>
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              placeholder="Enter Your Email "
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              type="email"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="btn btn-block btn-warning"
                              value="Cancel"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              style={{
                                backgroundColor: " rgb(43, 152, 241)",
                                color: "aliceblue",
                              }}
                              className="btn btn-block"
                              value="Next"
                              type="submit"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
