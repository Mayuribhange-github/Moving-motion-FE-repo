import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Otp() {
  const [value, setValue] = useState();
  const [otp1, setOtp1] = useState();
  const [otp2, setOtp2] = useState();
  const [otp3, setOtp3] = useState();
  const [otp4, setOtp4] = useState();
  const [otp5, setOtp5] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log("------------");
    console.log(location.email);
  }, []);
  const handleChange = (value1, event) => {
    this.setState({ [value1]: event.target.value });
  };

  const handleSubmit = (event) => {
    // const data = new FormData(event.target);
    // console.log(this.state);
    // event.preventDefault();
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
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
          <div className="col-md-4 ">
            <div className="card mt-5">
              <div className="card-body ">
                <div className="row ">
                  <div className="col-md-12">
                    <div className="text-center">
                      <h3>
                        <i className="fa fa-lock fa-4x"></i>
                      </h3>
                      <h2 className="text-center">Enter OTP</h2>
                      <p>Please Enter your OTP</p>
                      <form>
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              name="otp1"
                              type="text"
                              autoComplete="off"
                              value={otp1}
                              onChange={(e) => setOtp1(e.target.value)}
                              tabIndex="1"
                              maxLength="1"
                              onKeyUp={(e) => inputfocus(e)}
                              className="m-2 text-center form-control rounded"
                            />
                            <input
                              name="otp2"
                              type="text"
                              autoComplete="off"
                              className="m-2 text-center form-control rounded"
                              value={otp2}
                              onChange={(e) => setOtp2(e.target.value)}
                              tabIndex="2"
                              maxLength="1"
                              onKeyUp={(e) => inputfocus(e)}
                            />
                            <input
                              name="otp3"
                              type="text"
                              autoComplete="off"
                              className="m-2 text-center form-control rounded"
                              value={otp3}
                              onChange={(e) => setOtp3(e.target.value)}
                              tabIndex="3"
                              maxLength="1"
                              onKeyUp={(e) => inputfocus(e)}
                            />
                            <input
                              name="otp4"
                              type="text"
                              autoComplete="off"
                              className="m-2 text-center form-control rounded"
                              value={otp4}
                              onChange={(e) => setOtp4(e.target.value)}
                              tabIndex="4"
                              maxLength="1"
                              onKeyUp={(e) => inputfocus(e)}
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
                      {/* </div> */}
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
