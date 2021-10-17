import React, { useContext, useState } from "react";
import CartContext from "../../../contexts/cartContext";
import { Button, ContainerMessage } from "./styled";
import SVGIconCart from "../../../images/icon-white-cart.svg";

function ButtonAddCart() {
  const { addProductToCart, toggleStateOpenCart, isOpenCart, quantity } =
    useContext(CartContext);
  const [message, setMessage] = useState("");

  const productTest = {
    id: "1",
    price: 125,
    image: "/images/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    quantity: quantity,
  };

  function onClickAddToCart(product) {
    if (quantity === 0) {
      setMessage("For to add to cart, the quantity should be major of 0");
      return;
    }

    if (isOpenCart === false) {
      toggleStateOpenCart();
    }
    setMessage("");
    addProductToCart(product);
  }

  return (
    <Button onClick={() => onClickAddToCart(productTest)}>
      <img src={SVGIconCart} color="#fff" alt="Logo Cart" />
      <span>Add to cart</span>
      {quantity == 0 && <ContainerMessage>{message}</ContainerMessage>}
    </Button>
  );
}

export default ButtonAddCart;
