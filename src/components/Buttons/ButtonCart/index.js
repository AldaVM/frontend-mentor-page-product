import React, { useContext } from "react";
import CartContext from "../../../contexts/cartContext";
import SVGIconCart from "../../../images/icon-cart.svg";
import { ContainerButtonCart } from "./styled";

function ButtonCart() {
  const { toggleStateOpenCart, products, isOpenCart } = useContext(CartContext);

  return (
    <ContainerButtonCart onClick={toggleStateOpenCart}>
      {products.length > 0 && isOpenCart === true && (
        <span>{products[0].quantity}</span>
      )}
      <img src={SVGIconCart} alt="Logo Cart" />
    </ContainerButtonCart>
  );
}

export default ButtonCart;
