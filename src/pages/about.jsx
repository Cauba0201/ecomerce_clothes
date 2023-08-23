import React from "react";
import { Link } from "react-router-dom";
import videok from "../imgs/about/1.mp4";
import blog1 from "../imgs/blog/blog-1.jpg";
import blog2 from "../imgs/blog/blog-2.jpg";
import blog3 from "../imgs/blog/blog-3.jpg";
import blog4 from "../imgs/blog/blog-4.jpg";
import banner from "../imgs/about/banner.png";
import a6 from "../imgs/about/a6.jpg";
import Marquee from "react-fast-marquee";
import order1 from "../imgs/icon/icon1.png";
import order2 from "../imgs/icon/icon2.png";
import order3 from "../imgs/icon/icon3.png";
import order4 from "../imgs/icon/icon4.png";
import order5 from "../imgs/icon/icon5.png";
import order6 from "../imgs/icon/icon6.png";

function About() {
  return (
    <>
      <section className="about-wrapper p-5 d-flex justify-content-center align-items-center">
        <div className="container-xxl">
          <div className="row">
            <div>
              <img src={banner} alt="..." className="img-fluid img-banner" />
            </div>
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="text-white">#Know</h1>
                <p className="text-white fs-3">Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={a6} alt="..." className="img-fluid p-5" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-itema-center">
            <h1>
              <b>i love u ?</b>
            </h1>
            <p className="card-text mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Quibusdam tempore unde aperiam, consectetur harum a eum error,{" "}
              <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod
              et sint facere reprehenderit?
            </p>
          </div>
        </div>
      </section>
      <section className="about-app p-5">
        <h2 className="fs-1 mb-4 text-center">
          Dowload our <Link>App</Link>
        </h2>
        <div className="col-12 p-5 col-md-8 mx-auto">
          <video loop muted autoPlay className="w-100" src={videok}></video>
        </div>
      </section>
      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">
                Our customers never miss a bit on providing feedback
              </p>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog1}
                      alt="..."
                      className="img-fluid rouded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Marvel Clein</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog2}
                      alt="..."
                      className="img-fluid rouded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog3}
                      alt="..."
                      className="img-fluid rouded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog4}
                      alt="..."
                      className="img-fluid rouded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Phillip Omosh</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog1}
                      alt="..."
                      className="img-fluid rouded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Marvel Clein</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog2}
                      alt="..."
                      className="img-fluid rouded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 p-3">
              <Marquee className="p-2 slide ">
                <div>
                  <img src={order1} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Fast Order</p>
                </div>
                <div>
                  <img src={order2} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Quick Shipping</p>
                </div>
                <div>
                  <img src={order3} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">High Saves</p>
                </div>
                <div>
                  <img src={order4} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">24/7 Support</p>
                </div>
                <div>
                  <img src={order5} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Online Orders</p>
                </div>
                <div>
                  <img src={order6} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Online Orders</p>
                </div>
                <div>
                  <img src={order1} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Fast Order</p>
                </div>
                <div>
                  <img src={order2} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Quick Shipping</p>
                </div>
                <div>
                  <img src={order3} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">High Saves</p>
                </div>
                <div>
                  <img src={order4} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">24/7 Support</p>
                </div>
                <div>
                  <img src={order5} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Online Orders</p>
                </div>
                <div>
                  <img src={order6} alt="..." className="img-fluid" />
                  <p className="card-text mb-2">Online Orders</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
