import { Container, Product } from './ProductStyles';

import Footer from '../Home/Footer';

export default function ProductPage({product}){  
    const { name, description, image, price } = product;

    return(
        <Container>
            <Product>
                <img src={image} alt={name}/>
                <div>
                    <h2>{name}</h2>
                    <span>
                        <h3>por R${price}</h3>
                        <button onClick={() => alert("Adicionar ao carrinho")}>Add +</button>
                    </span>
                    <h4>Descripction</h4>
                    <p>{description}</p>
                </div>
            </Product>
            <Footer />
        </Container>
    )
    
}