import {ProductContainer} from './homeStyles';

export default function EachProduct({product}){
    const {name, image, price} = product;
    return(
        <ProductContainer>
            <img src={image}/>
            <h6>{name}</h6>
            <p>por {price}</p>
            <button>
                <span> Add +</span>
            </button>
        </ProductContainer>
    )
}