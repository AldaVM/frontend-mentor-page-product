import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import ButtonCloaseModal from "../Buttons/ButtonCloseModal";
import ProductCardImages from "../ProductCardImages";
import { ModalAllDisplay, ContainerModal } from "./styled";

function ModalProduct() {
  const { currentProduct, isOpenModal } = useContext(CartContext);

  return (
    <ModalAllDisplay isVisible={isOpenModal}>
      <ContainerModal>
        <ButtonCloaseModal />
        <ProductCardImages
          {...currentProduct}
          product={currentProduct}
          isActiveSlides={true}
        />
      </ContainerModal>
    </ModalAllDisplay>
  );
}

export default ModalProduct;
