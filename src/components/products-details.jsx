import React, { useContext } from "react";
import {ShopContext} from '../components/ShopContext.jsx'
import { PRODUCTS,PRODUCTS1 } from "../data";

const ProductsDetails = () => {
  const {addToCart,removeToCart,cartItems,updateToCart,selectedProduct} = useContext(ShopContext)


  const productId = selectedProduct || 0
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId)
  return <>
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-6">
          <div className="card p-5 m-auto">
            <img src={product.image} alt="..." className="img-fluid card-img-top p-2"/>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  </>;
};

export default ProductsDetails;
