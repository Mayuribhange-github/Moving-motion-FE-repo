import React, { useEffect, useState } from "react";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setMessage } from "../reduxconfig/UserSlice";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [nameValidation, setNameValidation] = useState("");
  const [type, setType] = useState();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (name == "raju") {
      setNameValidation("please enter right word");
    } else {
      setNameValidation("");
    }
  }, [name]);

  const signUp = async (e) => {
    e.preventDefault();
    let detail = {
      name: name,
      contact: contact,
      customerType: type,
      email: email,
      password: password,
    };
    try {
      let response = await WebService.postApi(WebApi.USER_SIGNUP, {
        ...detail,
      });
      if (response.data.status) {
        dispatch(setMessage("Registration successfull"));
        navigate("/signIn");
      }
    } catch (err) {
      e.target.reset();
      console.log(err);
      toast.error("Registration failed please try again");
    }
  };
  return (
    <div>
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
                  <h3 className="mb-3 pb-2 pb-md-0 text-center px-md-2">
                    Sign-Up
                  </h3>
                  <ToastContainer />
                  <form onSubmit={signUp} className="px-md-2 col-md-8 m-auto">
                    <div className="row mb-4">
                      <div className="col-md-12 mt-2">
                        <label>Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                        <small>{nameValidation}</small>
                      </div>
                      <div className="col-md-12 mt-2">
                        <label>Contact</label>
                        <input
                          type="text"
                          onChange={(e) => setContact(e.target.value)}
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-12 mt-2">
                        <label>Customer type</label>
                        <select
                          onChange={(e) => setType(e.target.value)}
                          className="form-control"
                        >
                          <option>Select Type</option>
                          <option value="Customer">Customer</option>
                          <option value="VehicleOwner">Vehicle Owner</option>
                        </select>
                      </div>
                      <div className="col-md-12 mt-2">
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
                      <button type="submit" className="btn btn-success mb-2">
                        Sign-up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
