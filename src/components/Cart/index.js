import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import ButtonCheckout from "../Buttons/ButtonCheckout";
import CartItem from "../CartItem";
import {
  ContainerCart,
  TitleCart,
  ListProductsCart,
  ContainerBtn,
  MessageEmpty,
} from "./styled";

function Cart() {
  const { products } = useContext(CartContext);

  let isProductsOnCart = products.length > 0;

  return (
    <ContainerCart>
      <TitleCart>Cart</TitleCart>
      {isProductsOnCart ? (
        <>
          <ListProductsCart>
            {products.map((product) => (
              <CartItem key={product.id} {...product} />
            ))}
          </ListProductsCart>
          <ContainerBtn>
            {" "}
            <ButtonCheckout />
          </ContainerBtn>
        </>
      ) : (
        <MessageEmpty>Your cart is empty.</MessageEmpty>
      )}
    </ContainerCart>
  );
}

export default Cart;
