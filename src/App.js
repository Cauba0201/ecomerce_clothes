import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import Shop from "./pages/shop.jsx";
import Blog from "./pages/blog.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Cart from "./pages/cart.jsx";
import Login from "./pages/login.jsx";
import Wishlist from "./pages/wishlist.jsx";
import SignUp from "./pages/signup.jsx";
import Forgotpassword from "./pages/forgotpassword.jsx";
import Shopcontext from "./components/ShopContext.jsx";

function App() {
  return (
    <>
      <Shopcontext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotpassword" element={<Forgotpassword />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Shopcontext>
    </>
  );
}

export default App;
