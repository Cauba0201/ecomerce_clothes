import React from "react";
import ShopItems from "../components/shopItems.jsx";
import Hero from "../components/hero.jsx";
import Newsletter from "../components/newsletter.jsx";

function Shop() {
  return (
    <>
      <section className="shop-banner p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className="shop-details">
                <h1 className="text-white">
                  <b className="title-green">#100%</b>Off On All Products
                </h1>
                <p className="text-white fs-5">
                  Make your Orders We Will Deliver..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <ShopItems />
          </div>
        </div>
      </section>

      <section className="pagination p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-items">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden='true'>&laquo;</span>
                    </a>
                  </li>
                  <li className="page-items">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-items">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-items">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-items">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Hero/>

      <Newsletter/>

    </>
  );
}

export default Shop;
