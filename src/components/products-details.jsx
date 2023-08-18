import React, { useContext } from "react";
import { ShopContext } from "../components/ShopContext.jsx";
import { PRODUCTS, PRODUCTS1 } from "../data";

const ProductsDetails = () => {
  const { addToCart, removeToCart, cartItems, updateToCart, selectedProduct } =
    useContext(ShopContext);

  const productId = selectedProduct || 0;
  const product =
    PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS1.find((p) => p.id === productId);

  if (!product) {
    return null;
  }

  const cartItemsAmount = cartItems[product.id];
  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className="card p-5 m-auto">
              <img
                src={product.image}
                alt="..."
                className="img-fluid card-img-top p-2"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <h3 className="card-text">{product.name}</h3>
                <p className="card-text">
                  <span className="text-danger fs-4 me-2">
                    {product.price}$
                  </span>
                  <strike>{product.price * 2}$</strike>
                </p>
                <p className="card-text">{product.description}</p>
                <p className="card-text mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br /> Quibusdam tempore unde aperiam, consectetur harum a eum
                  error, <br /> libero nemo quisquam ex assumenda corrupti rerum
                  aut quod et sint facere reprehenderit?
                </p>

                <div className="col-6 d-flex align-item-center mb-3">
                  <button
                    className="btn btn-outline-secondary me-2"
                    onClick={() => addToCart(product.id)}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    value={cartItems[product.id]}
                    onChange={(e) =>
                      updateToCart(Number(e.target.value), product.id)
                    }
                  />
                  <button
                    className="btn btn-outline-secondary ms-2"
                    onClick={() => removeToCart(product.id)}
                  >
                    -
                  </button>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    className="myButton"
                    onClick={() => {
                      addToCart(product.id);
                      event.target.ClassList.toggle("red");
                    }}
                    id="button-link"
                  >
                    Add To Card
                    {cartItemsAmount > 0 && ` (${cartItemsAmount})`}
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex justify-content-center">
                <h2 className="text-center mb-2">More product of the same </h2>
                <p className="mb-2">
                  We have more products, visit the shop to get amazing deals
                  from us!!
                </p>
              </div>

              <div className="d-none d-md-block">
                <div className="row mb-3">
                  <div className="col-md-6 col-lg-8 mx-auto col-6">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                      {PRODUCTS.slice(3, 7).map((product) => (
                        <div className="col">
                          <div className="card h-100">
                            <img
                              src={product.image}
                              alt="..."
                              className="card-img-top"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-none d-md-block">
                <div className="row mb-3">
                  <div className="col-md-6 col-lg-8 mx-auto col-6">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                      {PRODUCTS1.slice(2, 6).map((product) => (
                        <div className="col">
                          <div className="card h-100">
                            <img
                              src={product.image}
                              alt="..."
                              className="card-img-top"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
