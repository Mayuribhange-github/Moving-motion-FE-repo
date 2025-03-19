import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5 mr-auto">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>
                  Lorem ipsum dolor sit classNamet consectetur adipisicing elit.
                  Aperiam iure deserunt ut architecto dolores quo beatae laborum
                  aliquam ipsam rem impedit obcaecati ea consequatur.
                </p>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <Link to="">About Us </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="">Services </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="">Testimonials </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="">Contact Us </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <Link to="" className="pl-0 pr-3">
                  <span className="icon-facebook"></span>{" "}
                </Link>
                <Link to="" className="pl-3 pr-3">
                  <span className="icon-twitter"></span>{" "}
                </Link>
                <Link to="" className="pl-3 pr-3">
                  <span className="icon-instagram"></span>{" "}
                </Link>
                <Link to="" className="pl-3 pr-3">
                  <span className="icon-linkedin"></span>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control border-secondary text-white bg-transparent"
                  placeholder="Enter Email"
                  aria-label="Enter Email"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary text-white"
                    type="button"
                    id="button-addon2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-2 mt-2 text-center">
          <div className="col-md-12">
            <div className="border-top pt-2">
              <p>
                Copyright &copy;All rights reserved |2023
                <br />
                chetanmalviya924@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
