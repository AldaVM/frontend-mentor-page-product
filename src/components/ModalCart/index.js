import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import { ModalContainer } from "./styled";

export default function ModalCart({ children }) {
  const { isOpenCart } = useContext(CartContext);

  return (
    <>
      <ModalContainer isVisible={isOpenCart}>{children}</ModalContainer>
    </>
  );
}
