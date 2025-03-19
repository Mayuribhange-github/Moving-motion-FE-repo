import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

export default function BackgroundBlock() {
  return (
    <div>
      <div
        className="site-blocks-cover "
        style={{ backgroundImage: `url(/images/hero_bg_2.jpg)` }}
        data-stellar-background-ratio="0.5"
        id="section-home"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
              <h1
                className="text-white font-weight-light text-uppercase font-weight-bold"
                data-aos="fade-up"
              >
                We Make Shipping
              </h1>
              <p className="mb-5" data-aos="fade-up" data-aos-delay="100">
                A Logistics Company
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                <Link
                  to="/signup"
                  className="btn btn-primary py-3 px-5 text-white"
                >
                  Get Started!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
