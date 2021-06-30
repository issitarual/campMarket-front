import { useParams } from 'react-router-dom';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Delivery from '../Component/Home/Delivery';
import ProductPage from '../Component/ProductPage/ProductPage';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Product(){
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const request = axios.get(`http://localhost:4000/products/${productId}`);

        request.then(success => setProduct(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[]);
    return(
        <Main>
            <Header />
            <Sidebar />
            <Delivery />
            <ProductPage product={product}/>
        </Main>
    )
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 50px);
`;