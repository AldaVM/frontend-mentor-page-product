import React, { useContext } from "react";
import CartContext from "../../../contexts/cartContext";
import SVGRemoveIconCart from "../../../images/icon-delete.svg";
import { BtnRemoveCart } from "./styled";

function ButtonRemoveCart({ productId }) {
  const { removeProductToCart } = useContext(CartContext);

  function onClickRemoveToCart(productId) {
    removeProductToCart(productId);
  }

  return (
    <BtnRemoveCart onClick={() => onClickRemoveToCart(productId)}>
      <img src={SVGRemoveIconCart} alt="Remove Item for the cart" />
    </BtnRemoveCart>
  );
}

export default ButtonRemoveCart;
