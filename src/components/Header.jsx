import React from "react";
import { Link, NavLink } from "react-router-dom";
import imgan from "../imgs/logo/logo_annguyen.jpg";

function Header() {
  return (
    <>
      <header className="header-top-strip p-2 ">
        <div className="container-xxl">
          <div className="row ">
            <div className="justify-conatent-between d-flex align-items-center d-none d-md-flex">
              <div className="col-md-8 me-auto ">
                <p>The trendding outfits at 100% off</p>
              </div>
              <div className="col-md-2 m-auto ">
                <a href="tel: +840919377108">Call us at +84919377108</a>
              </div>
              <div className="icon-header-top col-md ">
                <i className="fa-regular fa-envelope fs-5 mx-4"></i>
                <i className="fa-solid fa-phone-volume fs-5 mx-4"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper sticky-top p-md-2 p-lg-1 p-2">
        <div className="conatainer-xxl">
          <div className="row align-items-center m-0 ">
            <div className="d-flex justify-content-center col-md-2">
              <Link to="/" className="logo">
                <img src={imgan} alt="logo_annguyen" className="logo" />
              </Link>
            </div>

            <div className="col-md-10 row col-lg-10">
              <div className="col-md-3 m-auto">
                <div className="input-group d-none d-md-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    Search
                  </button>
                </div>
              </div>

              <div className="col-md-6 m-auto d-md-flex d-lg-flex mt-2 d-none ">
                <div className="ms-auto gap-3">
                  <NavLink to="/">HOME</NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink to="/shop">SHOP</NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink to="/blog">BLOG</NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink to="/about">ABOUT</NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink to="/contact">CONTACT</NavLink>
                </div>
              </div>

              <div className="col-1 p-2 justify-content-around  d-flex ">
                <Link to="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
