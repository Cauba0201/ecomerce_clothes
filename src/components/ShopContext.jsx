import React, { createContext, useState } from "react";
import { PRODUCTS, PRODUCTS1 } from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = [];

  for (let i = 0; i < PRODUCTS.length + PRODUCTS1.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

 const Shopcontext = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find(
          (product) =>
            product.id === Number(item) ||
            PRODUCTS1.find((product) => product.id === Number(item))
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const getTotalCartProducts = () => {
    let totalProduct = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalProduct += cartItems[item];
      }
    }
    return totalProduct;
  };
  const removeToCart = (productID) => {
    setCartItems((prev) => ({ ...prev, [productID]: prev[productID] - 1 }));
  };
  const clearToCart = (productID) => {
    const updateCartItems = {};
    for (const productID in cartItems) {
      updateCartItems[productID] = 0;
    }
    setCartItems(updateCartItems);
  };

  const updateToCart = (productID, newAmount) => {
    setCartItems((prev) => ({ ...prev, [productID]: newAmount }));
  };

  const resetToCart = () => {
    setCartItems([]);
  };

  const addToCart = (productID) => {
    setCartItems((prev) => ({ ...prev, [productID]: prev[productID] + 1 }));
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const viewProductDetails = (productID) => {
    setSelectedProduct(productID);
  };
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateToCart,
    clearToCart,
    resetToCart,
    getTotalCartAmount,
    getTotalCartProducts,
    viewProductDetails,
    closeProductDetails,
    selectedProduct,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default Shopcontext;
