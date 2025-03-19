import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const PaymentForm = () => {
  const [product, setProduct] = useState({
    name: "Product Name",
    price: 19,
  });
  const makePayment = (token) => {
    const body = {
      token: {
        user_id: "1001",
        userName: "parul",
        cardNo: "4242424242424242",
        pass: "000000",
      },
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return axios
      .post("/user/payment", body, headers)
      .then((response) => {
        console.log(response.data);
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <div className="container" style={{ padding: "40px" }}>
      <section id="pricing" className="pricing">
        <div
          className="container"
          data-aos="fade-up"
          style={{ marginLeft: "150px" }}
        >
          <div className="row" style={{ width: "130%" }}>
            <div
              className="col-lg-3 col-md-6 m-5 p-4"
              style={{ boxShadow: "3px 3px 10px orange", borderRadius: "15px" }}
            >
              <div className="box">
                <div className="p-1" style={{ backgroundColor: "#f58438" }}>
                  {" "}
                  <h1>
                    <center>
                      <font style={{ color: "white" }}>Weekly Plan</font>
                    </center>
                  </h1>
                  <h4>
                    <center>
                      <sup>Rs</sup>20<span> / Week</span>
                    </center>
                  </h4>
                </div>
                <ul className="ml-4 p-3">
                  <li>
                    <font style={{ fontSize: "20px" }}>
                      Unlimited access to each post access
                    </font>
                  </li>
                  <li>
                    <font style={{ fontSize: "20px" }}>
                      Unlimited access to contacts and chats
                    </font>
                  </li>
                  <li>
                    <font style={{ fontSize: "20px" }}>
                      Personal relationship manager
                    </font>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <center>
                    <StripeCheckout
                      stripeKey="pk_test_51MZWN4SBgk1zQLAc3omENUKqwq6inkokMUoy9ffOEBpklsEH3BFlASdDl724ATGREbSpYfnFk8jXXhTD2khcgK5900wuyilrw6"
                      token={makePayment}
                      name={product.name}
                      amount={product.price}
                      currency="USD"
                    />
                  </center>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 m-5 p-4"
              style={{ boxShadow: "3px 3px 10px orange", borderRadius: "15px" }}
            >
              <div className="box featured">
                <div className="p-1" style={{ backgroundColor: "#f58438" }}>
                  <h1>
                    <center>
                      <font style={{ color: "white" }}>Monthly Plan</font>
                    </center>
                  </h1>
                  <h4>
                    <center>
                      <sup>Rs</sup>100<span> / month</span>
                    </center>
                  </h4>
                </div>
                <ul className="ml-4 p-3">
                  <li>
                    <font style={{ fontSize: "20px" }}>
                      Unlimited access to each post access
                    </font>
                  </li>
                  <li>
                    <font style={{ fontSize: "20px" }}>
                      Unlimited access to contacts and chats
                    </font>
                  </li>
                  <li>
                    <font style={{ fontSize: "20px" }}>
                      Personal relationship manager
                    </font>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <center>
                    {" "}
                    <StripeCheckout
                      stripeKey="pk_test_51MZWN4SBgk1zQLAc3omENUKqwq6inkokMUoy9ffOEBpklsEH3BFlASdDl724ATGREbSpYfnFk8jXXhTD2khcgK5900wuyilrw6"
                      token={makePayment}
                      name={product.name}
                      amount={product.price}
                      currency="USD"
                    />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentForm;
