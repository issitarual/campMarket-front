import { useParams } from 'react-router-dom';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Delivery from '../Component/Home/Delivery';
import ProductPage from '../Component/ProductPage/ProductPage';
import SearchFeature from "../Component/SearchFeature";
import styled from 'styled-components';
import { useState } from 'react';

export default function Product(){
    const [isOpen, setIsOpen] = useState(false);
    const { productId } = useParams();
    
    return(
        <Main>
            <Header />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Delivery />
            <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
            <ProductPage productId={productId}/>
        </Main>
    )
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
`;