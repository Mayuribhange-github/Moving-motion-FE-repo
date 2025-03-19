import React from "react";

export default function TestiMonials() {
  return (
    <div>
      <div className="site-section border-bottom">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center border-primary">
              <h2 className="font-weight-light text-primary">Testimonials</h2>
            </div>
          </div>

          <div className="slide-one-item home-slider owl-carousel">
            <div>
              <div className="testimonial">
                <figure className="mb-4">
                  <img
                    src="images/person_1.jpg"
                    alt="testimonal1"
                    className="img-fluid mb-3"
                  />
                </figure>
                <blockquote>
                  <p>
                    &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                    repudiandae explicabo animi minima fuga beatae illum
                    eligendi incidunt consequatur. Amet dolores excepturi earum
                    unde iusto.&rdquo;
                  </p>
                  <p className="author"> &mdash; John Trump</p>
                </blockquote>
              </div>
            </div>
            <div>
              <div className="testimonial">
                <figure className="mb-4">
                  <img
                    src="images/person_2.jpg"
                    alt="testimonal2"
                    className="img-fluid mb-3"
                  />
                </figure>
                <blockquote>
                  <p>
                    &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                    repudiandae explicabo animi minima fuga beatae illum
                    eligendi incidunt consequatur. Amet dolores excepturi earum
                    unde iusto.&rdquo;
                  </p>
                  <p className="author"> &mdash; Roger Moore</p>
                </blockquote>
              </div>
            </div>

            <div>
              <div className="testimonial">
                <figure className="mb-4">
                  <img
                    src="images/person_4.jpg"
                    alt="testimonalImage"
                    className="img-fluid mb-3"
                  />
                </figure>
                <blockquote>
                  <p>
                    &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                    repudiandae explicabo animi minima fuga beatae illum
                    eligendi incidunt consequatur. Amet dolores excepturi earum
                    unde iusto.&rdquo;
                  </p>
                  <p className="author"> &mdash; Ben Carson</p>
                </blockquote>
              </div>
            </div>

            <div>
              <div className="testimonial">
                <figure className="mb-4">
                  <img
                    src="images/person_5.jpg"
                    alt="testimonal2Image"
                    className="img-fluid mb-3"
                  />
                </figure>
                <blockquote>
                  <p>
                    &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                    repudiandae explicabo animi minima fuga beatae illum
                    eligendi incidunt consequatur. Amet dolores excepturi earum
                    unde iusto.&rdquo;
                  </p>
                  <p className="author"> &mdash; Jed Smith</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
