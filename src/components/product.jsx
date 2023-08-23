import React from "react";
import pr1 from "../imgs/products/f5.jpg";
import pr2 from "../imgs/products/f6.jpg";
import pr3 from "../imgs/products/f7.jpg";
import pr4 from "../imgs/products/f8.jpg";
import Moreproducts from "./moreproducts";
import Newsletter from "./newsletter.jsx";

const product = (props) => {
  return (
    <>
      <section className="product-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-center ">
              <div className="col-md-6 P-4">
                <div className="p-5 align-items-center justify-content-center">
                  <img src={props.img} alt="..." className="img-fluid mb-2" />
                </div>
                <div className="row small-img p-5">
                  <div className="col-md-3">
                    <img
                      src={props.smallimage1}
                      alt="..."
                      className="card-top-img img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={props.smallimage2}
                      alt="..."
                      className="card-top-img img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={props.smallimage3}
                      alt="..."
                      className="card-top-img img-fluid"
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={props.smallimage4}
                      alt="..."
                      className="card-top-img img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 justify-content-center flex-column">
                <div className="product-details p-5">
                  <div className="mb-4">{props.title}</div>
                  <div className="mb-4">
                    <p>${props.price}&nbsp;</p>
                    <strike className="text-danger">200$</strike>
                  </div>
                  <div className="mb-5">
                    <div className="col-md-6">
                      <section type="select" id="option">
                        <option value="1">Select Size</option>
                        <option value="2">Small</option>
                        <option value="3">Medium</option>
                        <option value="4">Large</option>
                        <option value="5">XL</option>
                        <option value="6">XXL</option>
                      </section>
                    </div>
                    <div className="col-md-6">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <button id="button-link">Add to Cart </button>
                  </div>
                  <div className="mb-4">
                    <p>{props.description}</p>
                    <p>{props.description}</p>
                    <p>{props.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Moreproducts image1={pr1} image2={pr2} image3={pr3} image4={pr4} />

      <Newsletter />
    </>
  );
};

export default product;
