import React from "react";
import { useContext } from "react";
import { ShopContext } from "./ShopContext.jsx";

const CartItems = (props) => {
  const { id, name, price, image, brand } = props.data;
  const { addToCart, removeToCart, updateCart, CartItems } =
    useContext(ShopContext);

  const itemsInStock =
    id === 0 ? Math.ceil(((id + 2.5) * 102) / 2) : Math.ceil((id * 102.5) / 2);
  return (
    <>
      <div className="container card my-3">
        <div className="row g-3">
          <div className="col-12 col-md-5">
            <div className="p-3">
              <div className="cart-item-image m-auto">
                <img src={image} alt="..." className="img-fluid card-img-top" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="p-3">
              <h2>{name}</h2>
              <p className="cart-item-id">
                {" "}
                Product Brand: <b className="text-center mb-1">{brand}</b>
              </p>
              <p className="cart-item-id">
                {" "}
                Product Price: <b className="text-center mb-1"></b>
                {price}
              </p>
              <p className="cart-item-id">
                {" "}
                Product Number: <b className="text-center mb-3"></b>
                {id}
              </p>
              <p className="cart-item-id">
                {" "}
                Items Stock: <b className="text-danger"></b>
                {itemsInStock}
              </p>
            </div>

            <div className="p-3 d-flex justify-content-between align-items-center">
              <div className="count-handle">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => addToCart(id)}
                >
                  +
                </button>
                <input
                  className="form-control fs-4 text-danger"
                  value={CartItems[id]}
                  onChange={(e) => updateCart(Number(e.target.value), id)}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => removeToCart(id)}
                >
                  -
                </button>
              </div>

              <div className="p-3">
                <input
                  type="text"
                  id="coupon"
                  placeholder="Enter coupon code..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
