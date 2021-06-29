import { Category, AllProducts } from './homeStyles';
import EachProduct from './EachProduct';

import { useHistory } from 'react-router-dom';

export default function Products({type, products}){
    let history = useHistory();
    return(
        <>
            <Category>
                <p>{type.toUpperCase()}</p>
                <button onClick={goToCategory}>
                    See more +
                </button>
            </Category>
            <AllProducts>
                {products.map(n => <EachProduct product={n}/>)}
            </AllProducts>
        </>
    )
    function goToCategory(){
        if(type === "cold products"){
            history.push("/cold");
            return;
        }
        history.push(`/${type}`);
    }
}