import React from "react";
import { PRODUCTS, PRODUCTS1 } from "../data";
import { Prod } from "./prop.jsx";

const ShopItems = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default ShopItems;
