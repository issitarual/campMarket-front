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
        const request = axios.get(`https://back-campmarket.herokuapp.com/category/${name}`);

        request.then(success => setProducts(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[name]);
    return(
        <Container>
            <h1>
                {name === "vegetables"? "HORTIFRUTI":
                name === "meat"? "CARNES E PEIXES":
                name === "cold products"? "FRIOS E LATICÍNIOS":
                null}
            </h1>
            {products.length === 0? <Loading page={"product"}/>: null}
            <div>
                {products.map((n,i) => <EachProduct key={i} product={n}/>)}
            </div>
            <Footer page={"category"}/>
        </Container>
    )
}