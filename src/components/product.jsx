import React from "react";
import pr1 from "../imgs/products/f5.jpg";
import pr2 from "../imgs/products/f6.jpg";
import pr3 from "../imgs/products/f7.jpg";
import pr4 from "../imgs/products/f8.jpg";

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
                    <img src="" alt="" />
                  </div>
                  <div className="col-md-3">
                    <img src="" alt="" />
                  </div>
                  <div className="col-md-3">
                    <img src="" alt="" />
                  </div>
                  <div className="col-md-3">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <div className="mb-4"></div>
                  <div className="mb-4"></div>
                  <div className="mb-5">
                    <div className="col-md-6"></div>
                    <div className="col-md-6"></div>
                  </div>
                  <div className="mb-4">
                    <button></button>
                  </div>
                  <div className="mb-4">
                    <p></p>
                    <p></p>
                    <p></p>
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

export default product;
