import Delivery from "./Delivery";
import Products from "./Products";
import Footer from "./Footer";

import { Container } from "./homeStyles";

export default function Home (){
    const arrayOfProducts = [{
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "vegetables"
    },
    {
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "vegetables"
    },
    {
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "vegetables"
    },
    {
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "vegetables"
    },
    {
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "vegetables"
    },
    {
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "meats"
    },
    {
        name: "tomato",
        image: "https://abcemcasa.vteximg.com.br/arquivos/ids/291906-450-450/TOMATE-ANDREIA-KG.jpg?v=637292230818400000",
        price: "R$4,99",
        description: "Conhecido também como tomate Longa Vida, é o mais consumido no País. Tem alta durabilidade graças aos genes da composição, mas esses mesmos genes também influenciam no sabor e no aspecto. É um tomate mais aguado e amarelado, ideal para salada, mas ruim para molhos, que tendem a ficar mais alaranjados e sem sabor.  A bandeja de aproximadamente 1kg contém 6 unidades, de acordo com a safra.",
        type: "cold products"
    },
    ]
    return(
        <Container>
            <Delivery/>
            <Products type={"vegetables"} products={arrayOfProducts.filter(n => n.type === "vegetables")}/>
            <Products type={"cold products"} products={arrayOfProducts.filter(n => n.type === "cold products")}/>
            <Products type={"meats"} products={arrayOfProducts.filter(n => n.type === "meats")}/>
            <Footer/>
        </Container>
    )
}