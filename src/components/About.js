import React from "react";
import HowItWork from "./HowItWork";

export default function About() {
  return (
    <div>
      <div className="site-section" id="section-about">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-md-5 ml-auto mb-5 order-md-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="images/img_3.jpg"
                alt="about"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 order-md-1" data-aos="fade-up">
              <div className="text-left pb-1 border-primary mb-4">
                <h2 className="text-primary">About Us</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis deleniti reprehenderit animi est eaque corporis!
                Nisi, asperiores nam amet doloribus, soluta ut reiciendis.
                Consequatur modi rem, vero eos ipsam voluptas.
              </p>
              <p className="mb-5">
                Error minus sint nobis dolor laborum architecto, quaerat.
                Voluptatum porro expedita labore esse velit veniam laborum quo
                obcaecati similique iusto delectus quasi!
              </p>

              <ul className="ul-check list-unstyled success">
                <li>Error minus sint nobis dolor</li>
                <li>Voluptatum porro expedita labore esse</li>
                <li>Voluptas unde sit pariatur earum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <HowItWork />
    </div>
  );
}
