import React from "react";
import { Outlet } from "react-router-dom";

export default function IndexPage() {
  return (
    <div>
      <div
        className="view full-page-intro"
        style={{
          backgroundImage: "url('/images/img_8.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="mt-4 mb-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
