import React from "react";
import OurServices from "./OurServices";
import { Link } from "react-router-dom";

export default function OurTeam() {
  return (
    <div>
      <div className="site-section border-bottom" id="section-our-team">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center border-primary">
              <h2 className="font-weight-light text-primary" data-aos="fade">
                Our Team
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="100"
            >
              <div className="person">
                <img
                  src="images/person_1.jpg"
                  alt="Image1"
                  className="img-fluid rounded mb-5 w-75 rounded-circle"
                />
                <h3>Christine Rooster</h3>
                <p className="position text-muted">Co-Founder, President</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </p>
                <ul className="ul-social-circle">
                  <li>
                    <Link to="">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-linkedin"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="200"
            >
              <div className="person">
                <img
                  src="images/person_2.jpg"
                  alt="Image2"
                  className="img-fluid rounded mb-5 w-75 rounded-circle"
                />
                <h3>Brandon Sharp</h3>
                <p className="position text-muted">Co-Founder, COO</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </p>
                <ul className="ul-social-circle">
                  <li>
                    <Link to="">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-linkedin"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="300"
            >
              <div className="person">
                <img
                  src="images/person_4.jpg"
                  alt="Image4"
                  className="img-fluid rounded mb-5 w-75 rounded-circle"
                />
                <h3>Connor Hodson</h3>
                <p className="position text-muted">Marketing</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  at consequatur unde molestiae quidem provident voluptatum
                  deleniti quo iste error eos est praesentium distinctio
                  cupiditate tempore suscipit inventore deserunt tenetur.
                </p>
                <ul className="ul-social-circle">
                  <li>
                    <Link to="">
                      <span className="icon-facebook"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-twitter"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-linkedin"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <span className="icon-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurServices />
    </div>
  );
}
