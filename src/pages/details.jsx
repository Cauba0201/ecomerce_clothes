import React from "react";
import ProductsDetails from "../components/products-details";

const Details = () => {
  return (
    <>
      <div className="details-banner p5">
        <div className="container-xxl">
          <div className="row">
            <ProductsDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
