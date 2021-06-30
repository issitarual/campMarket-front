import { Container, Product } from './ProductStyles';

import Footer from '../Home/Footer';

export default function ProductPage({product}){
    const { name, description, image, price}= product
    return(
        <Container>
            <Product>
                <img src={image} alt={name}/>
            </Product>
            
            <Footer />
        </Container>
    )
}