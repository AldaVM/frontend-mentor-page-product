import React from "react";
import ButtonAvatar from "../Buttons/ButtonAvatar";
import ButtonCart from "../Buttons/ButtonCart";
import Logo from "../Logo";
import Menu from "../Menu";
import { HeaderContainer, HeaderTag, ItemHeader, ContainerButtonsHeader } from "./styled";

function Header() {
  return (
    <HeaderTag>
      <HeaderContainer>
        <ItemHeader>
          <Logo />
          <Menu />
        </ItemHeader>
        <ContainerButtonsHeader>
          <ButtonCart />
          <ButtonAvatar />
        </ContainerButtonsHeader>
      </HeaderContainer>
    </HeaderTag>
  );
}

export default Header;
