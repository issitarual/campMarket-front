import { useParams } from 'react-router-dom';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Delivery from '../Component/Home/Delivery';
import ProductPage from '../Component/ProductPage/ProductPage';
import SearchFeature from "../Component/SearchFeature";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product(){
    const [isOpen, setIsOpen] = useState(false);
    const { productId } = useParams();
    const [product, setProduct] = useState({name: "", description: "", price: 0, image: ""});
    useEffect(() => {
        const request = axios.get(`http://localhost:4000/products/${productId}`);

        request.then(success => setProduct(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[productId]);
    
    return(
        <Main>
            <Header />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Delivery />
            <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
            <ProductPage product={product}/>
        </Main>
    )
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  font-family: 'Roboto', sans-serif;
`;