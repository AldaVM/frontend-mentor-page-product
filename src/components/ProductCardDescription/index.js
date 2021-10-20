import React from "react";
import ButtonAddCart from "../Buttons/ButtonAddCart";
import ButtonQuantity from "../Buttons/ButtonQuantity";
import {
  ContainerDescriptionCard,
  TitleCard,
  SubTitleCard,
  DescriptionCard,
  LabelPrice,
  LabelDiscount,
  LabelOriginalPrice,
  ContainerButtonsCard,
} from "./styled";

function ProductCardDescription({
  company,
  name,
  description,
  price,
  discount,
  regularPrice,
}) {
  return (
    <ContainerDescriptionCard>
      <SubTitleCard>{company}</SubTitleCard>
      <TitleCard>{name}</TitleCard>
      <DescriptionCard>{description}</DescriptionCard>
      <div>
        <LabelPrice>${price}.00</LabelPrice>
        <LabelDiscount>{discount}%</LabelDiscount>
        <LabelOriginalPrice>${regularPrice}.00</LabelOriginalPrice>
      </div>
     
      <ContainerButtonsCard>
        <ButtonQuantity quantity={0} />
        <ButtonAddCart />
      </ContainerButtonsCard>
    </ContainerDescriptionCard>
  );
}

export default ProductCardDescription;
