import { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../Home/Footer';
import EachProduct from '../Home/EachProduct';
import { Container } from './CategoryStyles';
import Loading from '../Loading';

export default function CategoryPage({name}){
    if(name === "cold") name = "cold products"
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const request = axios.get(`http://localhost:4000/category/${name}`);

        request.then(success => setProducts(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[name]);
    return(
        <Container>
            {products.length === 0? <Loading/>: null}
            <h1>{name.toUpperCase()}</h1>
            <div>
                {products.map((n,i) => <EachProduct key={i} product={n}/>)}
            </div>
            <Footer/>
        </Container>
    )
}