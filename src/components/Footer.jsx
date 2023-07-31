import React from "react";
import { Link } from "react-router-dom";
import Playstore from "../imgs/pay/play.jpg";
import AppStore from "../imgs/pay/app.jpg";
import pay from "../imgs/pay/pay.png";

function Footer() {
  return (
    <>
      <footer className="footer p-5">
        <div className="conatainer-xxl">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Contact</b>
              </h2>
              <div className="mb-3">
                <p>
                  <b>Address: </b>Thika town, Naltex building, 2nd floor{" "}
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone: </b>{" "}
                  <a href="tel:+84123456789" className="footer-tel">
                    Call us at +1 (234) 567-890
                  </a>
                </p>
              </div>
              <div className="mb-4">
                <p>
                  <b>Hour: </b>From 8 a.m To 6 p.m
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <b>Follow The Develop</b>
                </p>
              </div>
              <div className="socials d-flex gap-4">
                <a
                  className="icon-discord footer-link"
                  href="https://discord.com/"
                >
                  <i class="fa-brands fa-discord"></i>
                </a>
                <a
                  className="icon-twitter footer-link"
                  href="https://twitter.com/i/flow/login"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a
                  className="icon-github footer-link"
                  href="https://github.com/"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
                <a className="icon-slack footer-link" href="https://slack.com/">
                  <i class="fa-brands fa-slack"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>About</b>
              </h2>
              <div className="mb-3">
                <Link to="/about" className="footer-links">
                  About Us
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/" className="footer-links">
                  Delivery
                </Link>
              </div>
              <div className="mb-3">
                <Link className="footer-links">Privacy Policy</Link>
              </div>
              <div className="mb-3">
                <Link className="footer-links">Terms & Conditions</Link>
              </div>
              <div className="mb-3">
                <Link className="footer-links">Fee Policy</Link>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Account</b>
              </h2>
              <div className="mb-3">
                <Link to="/login" className="footer-links">
                  Profile
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/cart" className="footer-links">
                  View Card
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/contact" className="footer-links">
                  Help
                </Link>
              </div>
              <div className="mb-3">
                <Link className="footer-links">Payments</Link>
              </div>
              <div className="mb-3">
                <Link className="footer-links">My Wishlist</Link>
              </div>
              <div className="mb-3">
                <Link className="footer-links">Coupons</Link>
              </div>
            </div>

            <div className="col-md-4 col-lg-4">
              <h2 className="footer-title mb-3">
                <b>Install App</b>
              </h2>
              <p className="mb-3">
                Avilable On Google Play Service & App Store
              </p>
              <div className="pay mb-3 col-md-6 col-12">
                <div className="mb-3">
                  <Link
                    to="https://play.google.com/store/games?hl=en_US&gl=US"
                    target="_blank"
                    className="footer-links"
                  >
                    <img src={Playstore} alt="Play_store" />
                  </Link>
                </div>
                <div className="mb-3">
                  <Link
                    to="https://www.apple.com/app-store/"
                    target="_blank"
                    className="footer-links"
                  >
                    <img src={AppStore} alt="App_Store" />
                  </Link>
                </div>
                <p className="mb-3">Payment Methods</p>

                <div className="pay">
                  <Link
                    to="https://www.paypal.com/signin "
                    className="footer-links"
                    target="_blank"
                  >
                    <img src={pay} alt="paypal" />
                  </Link>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="text-center text-md-start">
                  ©Developed by Eclar Developers 2023
                </p>
              </div>
              <div className="col-12 col-md-6">
                <ul className="list-inline text-center text-md-end">
                  <li className="list-inline-item">
                    <Link to="#" className="text-dark">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-dark">
                      Terms of Use
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-dark">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
