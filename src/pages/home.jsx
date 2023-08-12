import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero.jsx";
import blog1 from "../imgs/blog/blog-1.jpg";
import blog2 from "../imgs/blog/blog-2.jpg";
import blog3 from "../imgs/blog/blog-3.jpg";
import blog4 from "../imgs/blog/blog-4.jpg";
import banner1 from "../imgs/banner/b17.jpg";
import banner2 from "../imgs/banner/b10.jpg";
import FeartureProducts from "../components/feartureProducts.jsx";
import NewArrivals from "../components/newArrivals.jsx";
import Newsletter from "../components/newsletter.jsx";

function Home() {
  return (
    <>
      <section className="banner p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 "></div>
            <div className="d-flex flex-column justify-content-center">
              <div className="carouselExampleInterval slide carousel">
                <div className="carousel-inner">
                  <div className="back-details">
                      <p className="mb-3">Trade in offer</p>
                    <h1>Super Value Deals</h1>
                    <h2>On All Products</h2>
                    <p className="mb-3">Save more today with Apneck</p>
                    <Link to="/shop" className="btn btn-primary button-link">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
            <FeartureProducts />
          </div>
        </div>
      </section>
      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details align-items-center text-center">
              <h5 className="mb-3 text-white">Repair Services</h5>
              <h2 className="mb-3 text-white">
                On 70% Off on All Products And Accessories
              </h2>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="new-arrivals p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
            <NewArrivals />
            {/* component New Arrivals production */}
          </div>
        </div>
      </section>
      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={banner1} alt="..." className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hot Deals</h5>
                      <h2 className="card-text mb-2">Buy One Get One Free</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          The laster best collection in our cloest <br />
                          Feel Cute with Our Outfits
                        </small>
                      </p>
                      <Link to="/blog">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={banner2} alt="..." className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Season-In</h5>
                      <h2 className="card-text mb-2">All Weather Attire</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          It never matter which season it is <br />
                          We got you covered.
                        </small>
                      </p>
                      <Link to="/blog">
                        <button className="mt-4">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">
                Our customers never miss a bit on providing feedback
              </p>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog1} alt="..." className="card-img-top img-fluid" />
                <div className="card-body">
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="/about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog2} alt="..." className="card-img-top img-fluid" />
                <div className="card-body">
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="/about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog3} alt="..." className="card-img-top img-fluid" />
                <div className="card-body">
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="/about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog4} alt="..." className="card-img-top img-fluid" />
                <div className="card-body">
                  <p className="card-text ">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="/about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter/>
    </>
  );
}

export default Home;
