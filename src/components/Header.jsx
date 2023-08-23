import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import imgan from "../imgs/logo/logo_annguyen.jpg";
import { useState, useContext } from "react";
import { ShopContext } from "../components/ShopContext.jsx";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalProduct = getTotalCartProducts();
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
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
                <Link className="fa-regular fa-envelope fs-5 mx-4"></Link>
                <Link className="fa-solid fa-phone-volume fs-5 mx-4"></Link>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-between d-md-none">
              <div className="col-md-6 me-auto">
                <p>Sale up to 100%</p>
              </div>
              <div className="col-md-2 m-auto">
                <a href="tel:+0123456789">Call Us</a>
              </div>
              <div className="col-md-2 m-auto">
                <Link className="fa-regular fa-envelope fs-5 mx-4"></Link>
                <Link className="fa-solid fa-phone-volume fs-5 mx-4"></Link>
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

              <button className="cart-span fs-3 d-md-none">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "not-active"
                  }
                >
                  <b>
                    <span>{totalProduct}</span>
                  </b>
                </Link>
              </button>

              <button className="cart-span2 fs-3 d-md-none">
                <Link
                  to="login"
                  className={
                    location.pathname === "/login" ? "active" : "not-active"
                  }
                ></Link>
              </button>
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
                  <NavLink
                    to="/"
                    className={
                      location.pathname === "/" ? "active" : "not-active"
                    }
                    onclick={toggleMenu}
                  >
                    HOME
                  </NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink
                    to="/shop"
                    className={
                      location.pathname === "/shop" ? "active" : "not-active"
                    }
                    onclick={toggleMenu}
                  >
                    SHOP
                  </NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink
                    to="/blog"
                    className={
                      location.pathname === "/blog" ? "active" : "not-active"
                    }
                    onclick={toggleMenu}
                  >
                    BLOG
                  </NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink
                    to="/about"
                    className={
                      location.pathname === "/about" ? "active" : "not-active"
                    }
                    onclick={toggleMenu}
                  >
                    ABOUT
                  </NavLink>
                </div>
                <div className="ms-auto gap-3">
                  <NavLink
                    to="/contact"
                    className={
                      location.pathname === "/contact" ? "active" : "not-active"
                    }
                    onclick={toggleMenu}
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>

              {/* <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-2 col-12 d-none d-md-flex d-lg-flex m-auto">
                    
                    <div
                      className={
                        location.pathname === "login" ? "active" : "not-active"
                      }
                    >
                      <Link
                        to="/login"
                        className="d-flex align-items-center color-nav me-3"
                        onclick={toggleMenu}
                      ></Link>
                    </div>
                    <div
                      className={
                        location.pathname === "cart" ? "active" : "not-active"
                      }
                    >
                      <Link
                        to="/cart"
                        className="d-flex align-items-center color-nav me-3"
                        onclick={toggleMenu}
                      >
                        <div className="">
                          <p>
                            <b>
                              <span>{totalProduct}</span>
                            </b>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-1 p-2 justify-content-around  d-flex ">
                <Link to="/login">
                  <i className="fa-regular fa-user"></i>
                </Link>
                <Link to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </div>
            </div>

            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      to="/"
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      to="/shop"
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      to="/blog"
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      to="/contact"
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                </div>

                <div className="menu-bar__actions">
                  <div className="mb-2">
                    <Link
                      to=""
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <Link to="/cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Link>
                      <span>New</span>
                    </Link>
                  </div>

                  <div className="mb-2">
                    <Link
                      to="/login"
                      className={
                        location.pathname === "/login" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <Link to="/login">
                        <i className="fa-regular fa-user"></i>
                      </Link>
                      <span>Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
