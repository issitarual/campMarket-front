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
        const request = axios.get("http://localhost:4000/products");

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
            {products.length === 0? <Loading/>: null}
            <Products type={"vegetables"} products={vegetables}/>
            <Products type={"cold products"} products={coldProducts}/>
            <Products type={"meat"} products={meat}/>
            <Footer/>
        </Container>
    )
}