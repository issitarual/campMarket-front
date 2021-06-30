import {ProductContainer} from './homeStyles';
import { useHistory } from 'react-router';

export default function EachProduct({product}){
    const {name, image, price, id} = product;
    let history = useHistory();
    return(
        <ProductContainer>
            <img src={image} alt={name} onClick={()=> goToProduct(id)}/>
            <h6 onClick={()=> goToProduct(id)}>{name}</h6>
            <p>por R${price}</p>
            <button onClick={() => goToProduct(id)}>
                <span> Add +</span>
            </button>
        </ProductContainer>
    );
    function goToProduct(id){
        history.push(`/product/${id}`)
    }
}