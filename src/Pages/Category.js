import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Delivery from "../Component/Home/Delivery";
import SearchFeature from "../Component/SearchFeature";
import CategoryPage from "../Component/CetegoryPage/CategoryPage";
import Cart from "../Component/Cart";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const { categoryName } = useParams();
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <Main>
      <Header />
      <Delivery />
      <CategoryPage name={categoryName} />
      <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
      />
      <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
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

export default Category;
