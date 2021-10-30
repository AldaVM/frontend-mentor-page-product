import React, { useContext } from "react";
import CartContext from "../../contexts/cartContext";
import {
  ContainerPrincipalImage,
  ListThumbs,
  ContainerThumb,
  ContainerSlidePrincipal,
  ButtonSlideLeft,
  ButtonSlideRight,
} from "./styled";
import SVGIconPrevious from "../../images/icon-previous.svg";
import SVGIconNext from "../../images/icon-next.svg";
import { breakpointMovil } from "../../constants";

function isViewportMovil() {
  const mediaQuery = window.matchMedia(`(max-width: ${breakpointMovil})`);
  return mediaQuery.matches;
}

function ThumbImage({ thumb, description, source, product, isActive, id }) {
  const { changeImageProduct } = useContext(CartContext);

  function handleClick() {
    changeImageProduct(product, source, id);
  }

  return (
    <ContainerThumb isActive={isActive} onClick={handleClick}>
      <img src={thumb} alt={description} />
    </ContainerThumb>
  );
}

function ProductCardImages({
  imgPrincipal,
  thumbsProducts,
  name,
  product,
  isActiveSlides = false,
}) {
  const { changeImageProduct, toggleStateOpenModal } = useContext(CartContext);

  function nextImage() {
    const products = product.thumbsProducts;
    products.map((currentProduct, index) => {
      if (currentProduct.isActive) {
        if (index + 1 < products.length) {
          console.log(index + 1);
          changeImageProduct(
            product,
            products[index + 1].source,
            products[index + 1].id
          );
        } else {
          changeImageProduct(product, products[0].source, products[0].id);
        }
      }
      return;
    });
  }

  function previousImage() {
    const products = product.thumbsProducts;
    const sizeProduct = products.length;
    products.map((currentProduct, index) => {
      if (currentProduct.isActive) {
        if (index - 1 >= 0 && index - 1 < sizeProduct) {
          changeImageProduct(
            product,
            products[index - 1].source,
            products[index - 1].id
          );
        } else {
          changeImageProduct(
            product,
            products[sizeProduct - 1].source,
            products[sizeProduct - 1].id
          );
        }
      }
      return;
    });
  }

  function openModal() {
    const isMovilViewport = isViewportMovil();
    if (isMovilViewport) {
      return;
    }
    toggleStateOpenModal(true);
  }

  return (
    <section>
      <ContainerSlidePrincipal>
        {isActiveSlides && (
          <ButtonSlideLeft onClick={previousImage}>
            <img src={SVGIconPrevious} alt="previous image" />
          </ButtonSlideLeft>
        )}

        {isViewportMovil() && (
          <ButtonSlideLeft onClick={previousImage}>
            <img src={SVGIconPrevious} alt="previous image" />
          </ButtonSlideLeft>
        )}

        <ContainerPrincipalImage onClick={openModal}>
          <img src={imgPrincipal.source} alt={name} />
        </ContainerPrincipalImage>

        {isActiveSlides && (
          <ButtonSlideRight onClick={nextImage}>
            <img src={SVGIconNext} alt="next image" />
          </ButtonSlideRight>
        )}

        {isViewportMovil() && (
          <ButtonSlideRight onClick={nextImage}>
            <img src={SVGIconNext} alt="next image" />
          </ButtonSlideRight>
        )}
      </ContainerSlidePrincipal>

      <ListThumbs>
        {thumbsProducts.map((thumbProduct, index) => (
          <ThumbImage
            key={thumbProduct.id}
            {...thumbProduct}
            product={product}
          />
        ))}
      </ListThumbs>
    </section>
  );
}

export default ProductCardImages;
