import React, { useState } from "react";
import CartContext from "../contexts/cartContext";

export default function CartProvider({ children, initialValues }) {
  const [products, setProducts] = useState(initialValues.productsOnCart);

  function getProductsList(products) {
    const productsIds = Object.keys(products);

    if (productsIds.length > 0) {
      return productsIds.map((productId) => products[productId]);
    }

    return [];
  }

  function addProductToCart(product) {
    if (products[product.id]) {
      let quantity = products[product.id].quantity + product.quantity;

      let updateProducts = {
        ...products,
        [product.id]: {
          ...product,
          quantity,
          total: quantity * product.price,
        },
      };

      setProducts(updateProducts);
      return;
    }

    let newProducts = {
      ...products,
      [product.id]: {
        ...product,
        quantity: product.quantity,
        total: product.quantity * product.price,
      },
    };
    setProducts(newProducts);
  }

  function removeProductToCart(productId) {
    let newProducts = { ...products };

    if (newProducts[productId]) {
      delete newProducts[productId];
    }

    setProducts(newProducts);
  }

  return (
    <CartContext.Provider
      value={{
        products: getProductsList(products),
        addProductToCart,
        removeProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
