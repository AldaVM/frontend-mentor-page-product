import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import ProductCardImages from "../ProductCardImages";
import { ModalAllDisplay } from "./styled";

function ModalProduct() {
  const { currentProduct } = useContext(CartContext);

  return (
    <ModalAllDisplay isVisible={true}>
      <ProductCardImages
        {...currentProduct}
        product={currentProduct}
        isActiveSlides={true}
      />
    </ModalAllDisplay>
  );
}

export default ModalProduct;
