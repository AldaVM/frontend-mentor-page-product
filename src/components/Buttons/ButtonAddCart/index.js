import React, { useContext } from "react";
import CartContext from "../../../contexts/cartContext";

function ButtonAddCart() {
  const { addProductToCart } = useContext(CartContext);

  const productTest = {
    id: "1",
    price: 125,
    image: "/images/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    quantity: 1,
  };

  function onClickAddToCart(product) {
    addProductToCart(product);
    console.log("gola");
  }

  return <div onClick={() => onClickAddToCart(productTest)}>Add to cart</div>;
}

export default ButtonAddCart;
