import React from "react";
import CartProvider from "../../providers/cartProvider";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Main from "../../components/Main";
import ModalCart from "../../components/ModalCart";
import ButtonAddCart from "../../components/Buttons/ButtonAddCart";

function PageProduct() {
  return (
    <CartProvider
      initialValues={{
        productsOnCart: {},
      }}
    >
      <Header />
      <Main>
        <ButtonAddCart />
        <ModalCart>
          <Cart />
        </ModalCart>
      </Main>
    </CartProvider>
  );
}

export default PageProduct;
