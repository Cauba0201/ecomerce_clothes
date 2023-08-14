import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ShopContext } from "./ShopContext.jsx";

export const Prod = (props) => {
  const { id, name, price, image, brand } = props.data;
  const { viewProductDetails } = useContext(ShopContext);

  return (
    <>
      <div className="col mb-5">
        <Link key={id} className="card h-100 m-auto">
          <img src={image} alt="..." className="img-fluid card-img-top" />
          <div className="card-body">
            <p className="card-text mb-2">{brand}</p>
            <h5>{name}</h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#EA9D5A"
            ></ReactStars>
            <div className="mb-3">
              <p className="price mb-2">
                <span className="red">{price}</span>&nbsp;
                <strike>{price * 2}$</strike>
              </p>
              <Link to="/details" onClick={() => viewProductDetails(id)}>
                <p className="text-center">
                  <button className="fs-4 clear-cart">View Details</button>
                </p>
              </Link>
              {/* <div className="d-flex justify-content-center">
                <button
                  className="button"
                  onClick={() => {
                    addToCart(id);
                    event.target.classList.toggle("red");
                  }}
                >
                  Add To Cart
                  {cartItemAmount > 0 && `(${cartItemAmount})`}
                </button>
              </div> */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
