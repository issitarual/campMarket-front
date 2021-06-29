import Delivery from "./Delivery";
import Products from "./Products";
import Footer from "./Footer";

import { Container } from "./homeStyles";

export default function Home (){
    return(
        <Container>
            <Delivery/>
            <Products type={"vegetables"}/>
            <Products type={"cold products"}/>
            <Products type={"meats"}/>
            <Footer/>
        </Container>
    )
}