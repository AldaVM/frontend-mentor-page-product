import React from "react";
import SVGIconCart from "../../../images/icon-cart.svg";
import { ContainerButtonCart } from "./styled";

function ButtonCart() {
  return (
    <ContainerButtonCart>
      <img src={SVGIconCart} alt="Logo Cart" />
    </ContainerButtonCart>
  );
}

export default ButtonCart;
