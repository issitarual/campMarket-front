import { useParams } from "react-router-dom";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Delivery from "../Component/Home/Delivery";
import ProductPage from "../Component/ProductPage/ProductPage";
import SearchFeature from "../Component/SearchFeature";
import Cart from "../Component/Cart";
import styled from "styled-components";
import { useState } from "react";

export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const { productId } = useParams();
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <Main>
      <Header />
      <Delivery />
      <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
      />
      <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
      <ProductPage productId={productId} />
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  @media (max-width: 450px) {
    margin-top: 125px;
  }
`;
