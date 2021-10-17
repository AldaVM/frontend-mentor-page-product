import React, { useContext, useState } from "react";
import CartContext from "../../../contexts/cartContext";
import {
  ButtonConteinerQuantity,
  ButtonPlus,
  ButtonMinus,
  LabelQuantity,
  ContainerMessage,
} from "./styled";

function ButtonQuantity() {
  const { minusQuantity, plusQuantity, quantity } = useContext(CartContext);
  const [message, setMessage] = useState("");

  function validationMinusPut() {
    if (quantity > 0) {
      minusQuantity();
      setMessage("");
      return;
    }
    setMessage("The quantity don't minus of 0");
  }

  function validationPlusPut() {
    setMessage("");
    plusQuantity();
  }

  return (
    <ButtonConteinerQuantity>
      <ButtonMinus onClick={validationMinusPut}>-</ButtonMinus>
      <LabelQuantity>{quantity}</LabelQuantity>
      <ButtonPlus onClick={validationPlusPut}>+</ButtonPlus>
      {message && <ContainerMessage>{message}</ContainerMessage>}
    </ButtonConteinerQuantity>
  );
}

export default ButtonQuantity;
