import React from "react";
import { ItemNav, Nav } from "./styled";

function Menu() {
  return (
    <Nav>
      <ItemNav href="#">Collections</ItemNav>
      <ItemNav href="#">Men</ItemNav>
      <ItemNav href="#">Women</ItemNav>
      <ItemNav href="#">About</ItemNav>
      <ItemNav href="#">Contact</ItemNav>
    </Nav>
  );
}

export default Menu;
