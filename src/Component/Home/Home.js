import Products from "./Products";
import Footer from "./Footer";
import Loading from "../Loading";

import axios from 'axios';
import Delivery from "./Delivery";
import { useEffect, useState } from "react";
import { Container } from "./homeStyles";

export default function Home (){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);

        request.then(success => setProducts(success.data));
        request.catch(error => alert("Algo deu errado, tente mais tarde!"));
    },[]);

    const allVegetables = products.filter(n => n.categoryName === "vegetables");
    const vegetables = allVegetables.slice(0, 10);
    const allColdProducts = products.filter(n => n.categoryName === "cold products");
    const coldProducts = allColdProducts.slice(0, 10);
    const allMeat = products.filter(n => n.categoryName === "meat");
    const meat = allMeat.slice(0, 10);
    return(
        <Container>
            <Delivery/>
            <Products type={"vegetables"} products={vegetables}/>
            {products.length === 0? <Loading page={"home"}/>: null}
            <Products type={"cold products"} products={coldProducts}/>
            {products.length === 0? <Loading page={"home"}/>: null}
            <Products type={"meat"} products={meat}/>
            {products.length === 0? <Loading page={"home"}/>: null}
            <Footer/>
        </Container>
    )
}