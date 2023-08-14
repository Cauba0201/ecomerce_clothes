import React from "react";
import { useState, useContext } from "react";
import { PRODUCTS, PRODUCTS1 } from "../data";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const { cartItems, getTotalCartAmount, clearCart } = useContext();
  const totalAmount = getTotalCartAmount();
  const Navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleRize = () => {
    if (window.innerHeight < 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("Resize", handleRize);

  return (
    <>
      <section className="cart">
        <div className="container-xxl p-5">
          {totalAmount > 0 ? (
            <div className="row">
              <div className="p-2 text-center">Cart</div>
              <div className="col-12 text-center col-md-5">Product</div>
              <div className="col-12 text-center col-md-5">Details</div>

              <div className="p-3">
                {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <cartItems key={product.id} data={product} />;
                  }
                })}
                <div className="col-12 text-end p-2">
                  <button onClick={() => clearCart()} id="clear-cart">
                    Clear Cart{" "}
                  </button>
                </div>

                <hr />
                <div className="row">
                  <div className="col-12 col-md-6 d-flex justify-content-center">
                    <button onClick={() => Navigate("/shop")}>
                      {isMobile ? "continue" : "Continue Shipping"}
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                  <div className="col-12">
                    <div className="text-end">
                      <h2 className="mb-3">
                        <b>Total</b>
                      </h2>
                      <div className="align-items-center">
                        <div>
                          <p className="total-price align-items-center">
                            <b>${totalAmount}</b>
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => Navigate("/checkout")}
                        className="mt-5"
                      >
                        {isMobile ? "checkout" : "Proceed to Checkout"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-xxl">
              <div className="row">
                <div className="text-center">
                  <h2>Your Cart is Empty !</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
