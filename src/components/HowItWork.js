import React from "react";
import OurTeam from "./OurTeam";

export default function HowItWork() {
  return (
    <div>
      <div
        className="site-section bg-image overlay"
        style={{ backgroundImage: "url(/images/hero_bg_4.jpg)" }}
        id="section-how-it-works"
      >
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center border-primary">
              <h2 className="font-weight-light text-primary" data-aos="fade">
                How It Works
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="100"
            >
              <div className="how-it-work-item">
                <span className="number">1</span>
                <div className="how-it-work-body">
                  <h2>Make An Order</h2>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt praesentium dicta consectetur fuga neque fugit a
                    at. Cum quod vero assumenda iusto.
                  </p>
                  <ul className="ul-check list-unstyled success">
                    <li className="text-white">Error minus sint nobis dolor</li>
                    <li className="text-white">
                      Voluptatum porro expedita labore esse
                    </li>
                    <li className="text-white">
                      Voluptas unde sit pariatur earum
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="200"
            >
              <div className="how-it-work-item">
                <span className="number">2</span>
                <div className="how-it-work-body">
                  <h2>Make A Payment</h2>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt praesentium dicta consectetur fuga neque fugit a
                    at. Cum quod vero assumenda iusto.
                  </p>
                  <ul className="ul-check list-unstyled success">
                    <li className="text-white">Error minus sint nobis dolor</li>
                    <li className="text-white">
                      Voluptatum porro expedita labore esse
                    </li>
                    <li className="text-white">
                      Voluptas unde sit pariatur earum
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4 mb-5 mb-lg-0"
              data-aos="fade"
              data-aos-delay="300"
            >
              <div className="how-it-work-item">
                <span className="number">3</span>
                <div className="how-it-work-body">
                  <h2>Track Your Order</h2>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt praesentium dicta consectetur fuga neque fugit a
                    at. Cum quod vero assumenda iusto.
                  </p>
                  <ul className="ul-check list-unstyled success">
                    <li className="text-white">Error minus sint nobis dolor</li>
                    <li className="text-white">
                      Voluptatum porro expedita labore esse
                    </li>
                    <li className="text-white">
                      Voluptas unde sit pariatur earum
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
    </div>
  );
}
