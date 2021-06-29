import { Category, AllProducts } from './homeStyles';
import EachProduct from './EachProduct';

export default function Products({type, products}){
    return(
        <>
            <Category>
                <p>{type.toUpperCase()}</p>
                <button>
                    See more +
                </button>
            </Category>
            <AllProducts>
                {products.map(n => <EachProduct product={n}/>)}
            </AllProducts>
        </>
    )
}