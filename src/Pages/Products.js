import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
import Home from "../Component/Home/Home";
import SearchFeature from "../Component/SearchFeature";

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Main>
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home />
      <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100%;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`

export default Products;
