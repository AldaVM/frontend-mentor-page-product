import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import ProductCardDescription from "../ProductCardDescription";
import ProductCardImages from "../ProductCardImages";
import { ContainerCard } from "./styled";

function ProductCard() {
  const { currentProduct } = useContext(CartContext);

  return (
    <ContainerCard>
      <ProductCardImages {...currentProduct} product={currentProduct} />
      <ProductCardDescription {...currentProduct} />
    </ContainerCard>
  );
}

export default ProductCard;
