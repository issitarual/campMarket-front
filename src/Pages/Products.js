import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
import Home from "../Component/Home/Home";
import SearchFeature from "../Component/SearchFeature";
import Cart from "../Component/Cart";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <Main>
      <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen}/>
      <Home />
      <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`

export default Products;
