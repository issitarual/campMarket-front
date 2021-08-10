import { Container, Product } from "./ProductStyles";
import Footer from "../Home/Footer";
import Loading from "../Loading";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../Context/CartContext";

export default function ProductPage({ productId }) {
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const request = axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/product/${productId}`
    );

    request.then((success) => setProduct(success.data));
    request.catch((error) => alert("Algo deu errado, tente mais tarde!"));
  }, [productId]);

  const { name, description, image, price } = product;

  return (
    <Container>
      {product === {} ? <Loading page={"each product"} /> : null}
      <Product>
        <img src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <span>
            <h3>por R${price}</h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                let found = cart.find(
                  (item) => item.product.name === product.name
                );
                if (cart.includes(found)) {
                  found.qtd = found.qtd + 1;
                  localStorage.setItem("cart", JSON.stringify([...cart]));
                  alert("Mais um item adicionado no carrinho!");
                } else {
                  let qtd = 1;
                  setCart([...cart, { product, qtd }]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, { product, qtd }])
                  );
                  alert("Item adicionado no carrinho!");
                }
              }}
            >
              Adicionar +
            </button>
          </span>
          <h4>Descrição</h4>
          <p>{description}</p>
        </div>
      </Product>
      <Footer />
    </Container>
  );
}
