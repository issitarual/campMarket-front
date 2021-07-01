import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Delivery from '../Component/Home/Delivery';
import SearchFeature from "../Component/SearchFeature";
import CategoryPage from "../Component/CetegoryPage/CategoryPage";

import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const { categoryName } = useParams();

  return (
    <Main>
        <Header />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Delivery />
        <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
        <CategoryPage name={categoryName} />
    </Main>
  );
}


const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  font-family: 'Roboto', sans-serif;
`;

export default Category;
