import React, { useContext } from "react";
import CartContext from "../../../contexts/cartContext";
import SVGIconMenuBurger from "../../../images/icon-menu.svg";
import { ButtonContainer } from "./styled";

function ButtonMenu() {
  const { toggleMenu } = useContext(CartContext);

  return (
    <ButtonContainer onClick={toggleMenu}>
      <img src={SVGIconMenuBurger} alt="button of menu movil" />
    </ButtonContainer>
  );
}

export default ButtonMenu;
