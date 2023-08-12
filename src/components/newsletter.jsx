import React from "react";
import { Link } from "react-router-dom";
const Newsletter = () => {
  return (
    <>
      <div className="news-letter p-5 card-contact">
        <div className="container-xxl ">
          <div className="row g-3 ">
            <div className="col-md-6">
              <div className="d-flex flex-column align-items-center">
                <h2 className="mb-3">Sign Up For a Newsletter</h2>
                <h5>
                  Get email update on all our <Link> Special Offers</Link>
                </h5>
              </div>
            </div>
            <div className="col-md-6 details d-flex flex-column justify-content-center">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control news-input"
                  placeholder="@example.com"
                  aria
                />
                <button className="input-group-text basic-addon2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Newsletter;
