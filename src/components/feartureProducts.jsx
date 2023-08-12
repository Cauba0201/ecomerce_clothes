import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data.js";

const FeartureProducts = () => {
  return (
    <>
      <div className="row row-cols-1 row-clos-md-2 row-cols-lg-4 g-4 p-3 ">
        {PRODUCTS.slice(2, 6).map((product) => (
          <div className="col mb-5">
            <div key={product.id} className="card h-100 m-auto">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text mb-2">{product.brand}</p>
                <h5 className="mb-3">{product.name}</h5>
                <div className="card-footer text-center m-auto">
                  <p className="text-danger fs-4">{product.status}</p>
                  <p className="price">
                    <span className="red">
                      <strike>${product.rate}</strike>
                    </span>
                  </p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/shop" className="m-auto">
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeartureProducts;
