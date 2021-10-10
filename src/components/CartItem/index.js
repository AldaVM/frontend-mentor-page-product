import React from "react";
import ButtonRemoveCart from "../Buttons/ButtomRemoveCart";

import { ContainerItemCart, ImageCart } from "./styled";

function CartItem({ image, name, quantity, price, total, id }) {
  return (
    <ContainerItemCart>
      <ImageCart>
        <img src={image} alt={name} />
      </ImageCart>
      <div>
        <h3>{name}</h3>
        <span>
          ${price} x {quantity} <em>${total}</em>
        </span>
      </div>
      <ButtonRemoveCart productId={id} />
    </ContainerItemCart>
  );
}

export default CartItem;
