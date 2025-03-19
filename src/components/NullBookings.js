import React from "react";
import { Link } from "react-router-dom";

export default function NullBookings() {
  return (
    <div className="container pt-4 pb-4 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="d-flex justify-content-center">
          <div className="card ">
            <div className="card-body">
              <div className="row ">
                <div className="col-md-12">
                  <h2 className="text-center">Please Book Vehicle First</h2>
                </div>
                <div className="col-md-4 m-auto ">
                  <Link to="/index-user">
                    <button className=" btn btn-block btn-outline-primary ">
                      Book Vehicle
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
