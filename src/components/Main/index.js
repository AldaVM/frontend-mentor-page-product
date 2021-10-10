import React from "react";
import { MainContainer, MainTag } from "./styled.js";

function Main({ children }) {
  return (
    <MainTag>
      <MainContainer>{children}</MainContainer>
    </MainTag>
  );
}

export default Main;
