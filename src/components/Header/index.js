import React from "react";
import ButtonAvatar from "../Buttons/ButtonAvatar";
import ButtonCart from "../Buttons/ButtonCart";
import Logo from "../Logo";
import Menu from "../Menu";
import ButtonMenu from "../Buttons/ButtonMenu";
import {
  HeaderContainer,
  HeaderTag,
  ItemHeader,
  ContainerButtonsHeader,
} from "./styled";
import MenuMovil from "../MenuMovil";

function Header() {
  return (
    <HeaderTag>
      <HeaderContainer>
        <ItemHeader>
          <ButtonMenu />
          <Logo />
          <Menu />
        </ItemHeader>
        <ContainerButtonsHeader>
          <ButtonCart />
          <ButtonAvatar />
        </ContainerButtonsHeader>
      </HeaderContainer>
      <MenuMovil />
    </HeaderTag>
  );
}

export default Header;
