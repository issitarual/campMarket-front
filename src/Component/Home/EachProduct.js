import { ProductContainer } from './homeStyles';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import CartContext from "../../Context/CartContext";

export default function EachProduct({product}){
    const {cart, setCart} = useContext(CartContext);
    const {name, image, price, id} = product;
    let history = useHistory();

    return(
        <ProductContainer onClick={()=> goToProduct(id)}>
            <img src={image} alt={name}/>
            <h6>{name}</h6>
            <p>por R${price}</p>
            <button onClick={(e) => {
                e.stopPropagation();
                let found = cart.find((item)=>item.product.name === product.name);
                if(cart.includes(found)){
                    found.qtd = found.qtd+1
                    localStorage.setItem("cart", JSON.stringify([...cart]));
                }else{
                    let qtd = 1;
                    setCart([...cart, {product, qtd}]);   
                    localStorage.setItem("cart", JSON.stringify([...cart, {product, qtd}]));
                }
            }}>
                <span> Add +</span>
            </button>
        </ProductContainer>
    );
    function goToProduct(id){
        history.push(`/product/${id}`)
    }
}