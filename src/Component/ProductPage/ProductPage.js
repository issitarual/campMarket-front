import { Container, Product } from './ProductStyles';
import Footer from '../Home/Footer';
import Loading from '../Loading'

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ProductPage({productId}){  
    const [product, setProduct] = useState({});
    useEffect(() => {
        const request = axios.get(`https://back-campmarket.herokuapp.com/product/${productId}`);

        request.then(success => setProduct(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[productId]);

    const { name, description, image, price } = product;

    return(
        <Container>
            {product ===  {}? <Loading page={"each product"}/>: null}
            <Product>
                <img src={image} alt={name}/>
                <div>
                    <h2>{name}</h2>
                    <span>
                        <h3>por R${price}</h3>
                        <button onClick={() => alert("Adicionar ao carrinho")}>Adicionar +</button>
                    </span>
                    <h4>Descrição</h4>
                    <p>{description}</p>
                </div>
            </Product>
            <Footer />
        </Container>
    )
    
}