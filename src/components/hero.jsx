import React from "react";
import oder1 from "../imgs/icon/icon1.png";
import oder2 from "../imgs/icon/icon2.png";
import oder3 from "../imgs/icon/icon3.png";
import oder4 from "../imgs/icon/icon4.png";
import oder5 from "../imgs/icon/icon5.png";

const Hero = () => {
  return (
    <>
      <section className="hero p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
              <div className="row g-4 justify-content-center align-items-center justify-content-md-between">
                <div className=" col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={oder1}
                      alt="order1"
                      className="card-img-top img-fluid m-auto"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">Fast Orders</p>
                    </div>
                  </div>
                </div>

                <div className=" col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={oder2}
                      alt="oder2"
                      className="card-img-top img-fluid m-auto"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">Quick Shipping</p>
                    </div>
                  </div>
                </div>

                <div className=" col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={oder3}
                      alt="oder3"
                      className="card-img-top img-fluid m-auto"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">High Saves</p>
                    </div>
                  </div>
                </div>

                <div className=" col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={oder4}
                      alt="oder4"
                      className="card-img-top img-fluid m-auto"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">24/7 Support</p>
                    </div>
                  </div>
                </div>

                <div className=" col-6 col-md-4 col-lg-2">
                  <div className="card text-center m-auto">
                    <img
                      src={oder5}
                      alt="oder5"
                      className="card-img-top img-fluid m-auto"
                    />
                    <div className="card-body">
                      <p className="card-text mb-0">Online Order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
