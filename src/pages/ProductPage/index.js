import React from "react";
import CartProvider from "../../providers/cartProvider";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import Main from "../../components/Main";
import ModalCart from "../../components/ModalCart";
import ProductCard from "../../components/ProductCard";
import ModalProduct from "../../components/ModalProduct";

const product = {
  id: "1",
  price: 125,
  image: "/images/image-product-1-thumbnail.jpg",
  name: "Fall Limited Edition Sneakers",
  discount: 50,
  regularPrice: 250,
  description:
    "These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
  company: "SNEAKER COMPANY",
  imgPrincipal: {
    source: "/images/image-product-1.jpg",
  },
  thumbsProducts: [
    {
      id: "001",
      source: "/images/image-product-1.jpg",
      thumb: "/images/image-product-1-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers",
      isActive: true,
    },
    {
      id: "002",
      source: "/images/image-product-2.jpg",
      thumb: "/images/image-product-2-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers",
      isActive: false,
    },
    {
      id: "003",
      source: "/images/image-product-3.jpg",
      thumb: "/images/image-product-3-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers",
      isActive: false,
    },
    {
      id: "004",
      source: "/images/image-product-4.jpg",
      thumb: "/images/image-product-4-thumbnail.jpg",
      description: "Fall Limited Edition Sneakers",
      isActive: false,
    },
  ],
};

function PageProduct() {
  return (
    <CartProvider
      initialValues={{
        productsOnCart: {},
        currentProduct: product,
      }}
    >
      <Header />
      <Main>
        <ProductCard />
        <ModalCart>
          <Cart />
        </ModalCart>
      </Main>
      <ModalProduct />
    </CartProvider>
  );
}

export default PageProduct;
