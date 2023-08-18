import React, { useContext } from "react";
import pay from "../imgs/pay/pay.png";
import { ShopContext } from "../components/ShopContext.jsx";

const Checkout = () => {
  const { resetToCart, getTotalCartProducts, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount;
  const totalProduct = getTotalCartProducts;

  const handlePay = () => {
    window.alert(
      `Thank you for your purchase of ${totalProduct} products for a total of $${totalAmount}. Your request has been received and is being processed. `
    );
    resetToCart("");
  };
  return (
    <>
      <div className="checkout p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <h1 className="mb-4 fs-3">Paymethod</h1>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header p-0 " id="headingTwo">
                    <button
                      className="btn col-12 btn-light btn-block text-start colapsed p-3 rounded-0 border-bottom-custom"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="d-flex align-items-center justify-content-between">
                        <span className="col-md-6 ">
                          <span>Paypal</span>
                        </span>
                        <span className="col-md-6">
                          <img src={pay} alt="..." className="img-fluid" />
                        </span>
                      </span>
                    </button>
                  </div>

                  <div
                    className="collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Paypal email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="card m-auto">
                  <div className="card-header p-0">
                    <button
                      className="btn col-12 btn-light btn-block text-start colapsed p-3 rounded-0 "
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="d-flex align-items-center justify-content-between">
                        <span className="col-md-6">
                          <span>Credit Card</span>
                        </span>
                        <span className="icons col-6">
                          <img src={pay} alt="..." className="img-fluid" />
                        </span>
                      </span>
                    </button>
                  </div>

                  <div
                    className="collapse show"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body payment-card-body">
                      <span className="card-text font-weight-normal ">
                        Card Number
                      </span>
                      <div className="input mb-4">
                        {/* font-icon//////////////////////////////////// */}
                        <i className="fa fa-credit-card"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0000 0000 0000 0000"
                          required
                        />
                      </div>

                      <div className="row mt-3 mb-3">
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            Expiry Date
                          </span>
                          <div className="input">
                            {/* font-icon//////////////////////////////////// */}
                            <i className="fa fa-calendar"></i>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            CVC/CVV
                          </span>
                          <div className="input">
                            <i className="fa fa-lock"></i>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="000"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <span className="text-muted certificate-text">
                        <i className="fa fa-lock"></i>Your transaction is
                        secured with ssl certificatec
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-2">
              <h1>Fill the following details for shipping</h1>
              <form className="row">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputPassword4"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Mian St"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Aparment, studio or villa"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="inputState">
                    <option selected>choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12 mt-5">
                  <button id="button-linker" type="submit" onClick={handlePay}>
                    Proceed To Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
