import { Category } from './homeStyles';
import EachProduct from './EachProduct';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { useHistory } from 'react-router-dom';

export default function Products({type, products}){
    let history = useHistory();
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 2000 },
          items: 10
        },
        mediumDesktop:{
            breakpoint: { max: 2700, min: 1600 },
            items: 8
        },
        desktop: {
          breakpoint: { max: 2230, min: 2070 },
          items: 7
        },
        smallDesktop: {
            breakpoint: { max: 2070, min: 1770 },
            items: 6
          },
        superSmallDesktop: {
            breakpoint: { max: 1770, min: 1530 },
            items: 5
        },
        reallySmallDesktop: {
            breakpoint: { max: 1530, min: 1250 },
            items: 4
        },
        largeTablet: {
            breakpoint: { max: 1250, min: 1000 },
            items: 3
        },
        tablet: {
          breakpoint: { max: 1000, min: 750 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 750, min: 0 },
          items: 1
        }
      };
    return(
        <>
            <Category>
                <p>
                    {type === "vegetables"? "HORTIFRUTI":
                    type === "meat"? "CARNES E PEIXES":
                    type === "cold products"? "FRIOS E LATICÍNIOS":
                    null}
                </p>
                <button onClick={goToCategory}>
                    Veja mais +
                </button>
            </Category>
            <Carousel 
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                containerClass="carousel-container"
            >
                {products.map((n,i) => <EachProduct key={i} product={n}/>)}
            </Carousel>
        </>
    )
    function goToCategory(){
        if(type === "cold products"){
            history.push("/category/cold");
            return;
        }
        history.push(`/category/${type}`);
    }
}