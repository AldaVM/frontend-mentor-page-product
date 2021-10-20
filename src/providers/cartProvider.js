import React, { useState } from "react";
import CartContext from "../contexts/cartContext";

export default function CartProvider({ children, initialValues }) {
  const [products, setProducts] = useState(initialValues.productsOnCart);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(
    initialValues.currentProduct
  );
  const [quantity, setQuantiy] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function plusQuantity() {
    let tempQuantity = quantity + 1;
    setQuantiy(tempQuantity);
  }

  function toggleStateOpenModal(isOpen) {
    setIsOpenModal(isOpen);
  }

  function minusQuantity() {
    if (quantity > 0) {
      let tempQuantity = quantity - 1;
      setQuantiy(tempQuantity);
    }
  }

  function activeIdThumbs(id, thumbs) {
    return thumbs.map((thumb) => {
      if (thumb.id === id) {
        return { ...thumb, isActive: true };
      }

      return { ...thumb, isActive: false };
    });
  }

  function changeImageProduct(product, newSoruce, id) {
    const newThumbsProducts = activeIdThumbs(id, product.thumbsProducts);

    const newProduct = {
      ...product,
      imgPrincipal: {
        source: newSoruce,
      },
      thumbsProducts: newThumbsProducts,
    };
    console.log(newProduct);
    setCurrentProduct(newProduct);
  }

  function toggleStateOpenCart() {
    setIsOpenCart(!isOpenCart);
  }

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
      setQuantiy(0);
    }

    setProducts(newProducts);
  }

  return (
    <CartContext.Provider
      value={{
        products: getProductsList(products),
        addProductToCart,
        removeProductToCart,
        isOpenCart: isOpenCart,
        currentProduct: currentProduct,
        quantity: quantity,
        isOpenModal: isOpenModal,
        toggleStateOpenModal,
        changeImageProduct,
        toggleStateOpenCart,
        minusQuantity,
        plusQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
