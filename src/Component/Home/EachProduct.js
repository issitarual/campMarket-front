import {ProductContainer} from './homeStyles';

export default function EachProduct({product}){
    const {name, image, price} = product;
    return(
        <ProductContainer>
            <img src={image} onClick={()=> alert("vai pro produto")}/>
            <h6 onClick={()=> alert("vai pro produto")}>{name}</h6>
            <p>por R${price}</p>
            <button onClick={() => alert("Adicionado ao carrinho")}>
                <span> Add +</span>
            </button>
        </ProductContainer>
    )
}