import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import SVGIconClose from "../../images/icon-close.svg";
import {
  NavMovil,
  NavContainerMovil,
  ItemNavMovil,
  BtnMenuClose,
} from "./styled";

function MenuMovil() {
  const { isOpenMenu, toggleMenu } = useContext(CartContext);

  return (
    <NavContainerMovil isShowMenu={isOpenMenu}>
      <NavMovil>
        <BtnMenuClose onClick={toggleMenu}>
          <img src={SVGIconClose} alt="Button to close menu movil" />
        </BtnMenuClose>
        <ItemNavMovil href="#">Collections</ItemNavMovil>
        <ItemNavMovil href="#">Men</ItemNavMovil>
        <ItemNavMovil href="#">Women</ItemNavMovil>
        <ItemNavMovil href="#">About</ItemNavMovil>
        <ItemNavMovil href="#">Contact</ItemNavMovil>
      </NavMovil>
    </NavContainerMovil>
  );
}

export default MenuMovil;
