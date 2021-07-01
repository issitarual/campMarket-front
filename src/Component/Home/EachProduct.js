import {ProductContainer} from './homeStyles';
import { useHistory } from 'react-router';

export default function EachProduct({product}){
    const {name, image, price, id} = product;
    let history = useHistory();
    return(
        <ProductContainer onClick={()=> goToProduct(id)}>
            <img src={image} alt={name}/>
            <h6>{name}</h6>
            <p>por R${price}</p>
            <button onClick={(e) => {e.stopPropagation(); alert("Vai pro carrinho")}}>
                <span> Adicionar +</span>
            </button>
        </ProductContainer>
    );
    function goToProduct(id){
        history.push(`/product/${id}`)
    }
}