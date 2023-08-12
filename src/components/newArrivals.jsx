import React from "react";
import { PRODUCTS1 } from "../data";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        {PRODUCTS1.slice(1, 5).map((product1) => (
          <div className="col mb-5">
            <div key={product1.id} className="card h-100 m-auto">
              <img
                src={product1.image}
                alt="..."
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <p className="card-text mb-2">{product1.brand}</p>
                <h5 className="mb-3">{product1.name}</h5>
                <div className="card-footer text-center m-auto ">
                  <p className="text-danger fs-4">{product1.status}</p>
                  <p className="price">
                    <span className="red">
                      <strike>{product1.rate}</strike>
                    </span>
                  </p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/shop" className="m-auto"></Link>
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

export default NewArrivals;
