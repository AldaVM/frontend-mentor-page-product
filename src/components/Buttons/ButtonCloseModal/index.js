import React, { useContext } from "react";
import CartContext from "../../../contexts/cartContext";
import { BtnCloseModal } from "./styled";
import SVGIconClose from "../../../images/icon-close.svg";

function ButtonCloaseModal() {
  const { toggleStateOpenModal } = useContext(CartContext);

  function closeModal() {
    toggleStateOpenModal(false);
  }

  return (
    <BtnCloseModal onClick={closeModal}>
      <img src={SVGIconClose} alt="Close this modal with product detail" />
    </BtnCloseModal>
  );
}

export default ButtonCloaseModal;
