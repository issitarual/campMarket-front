import styled from "styled-components";
import { useContext, useEffect } from 'react';
import CartContext from "../Context/CartContext";
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { IoTrashBin } from "react-icons/io5";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Cart({ cartIsOpen, setCartIsOpen }){
    const {user} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.length > 0){
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
    },[]) //eslint-disable-line
    let Total = 0;
    {cart.map(p => {
        let sum = ((p.product.price.replace(",",".") * p.qtd))
        Total = Total + sum
    })}

    function increaseQtd(product){
        product.qtd = product.qtd+1
        setCart([...cart]);
        localStorage.setItem("cart", JSON.stringify([...cart]));
    }

    function decreaseQtd(product){
        product.qtd = product.qtd-1
        if(product.qtd === 0){
            const newCartFiltered = cart.filter((item)=>item !== product);
            setCart([...newCartFiltered]);
            localStorage.setItem("cart", JSON.stringify([...newCartFiltered]));
        } else {
            setCart([...cart]);
            localStorage.setItem("cart", JSON.stringify([...cart]));
        }
    }   

    function removeProduct(product){
        const newCartFiltered = cart.filter((item)=>item !== product);
        setCart([...newCartFiltered])
        localStorage.setItem("cart", JSON.stringify([...newCartFiltered]));
    }

    function attemptToPurchase(){
        if(!user){
            const checkAnswer = window.confirm("Você não está logado, deseja realizar o login para continuar?");
            if(checkAnswer){
                history.push("/Login");
                return
            }
        }else{
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
            }; 
            const body = {
                cart,
            }
            const req = axios.post('http://localhost:4000/finish', body, config)
            req.then(()=>{
                localStorage.clear();
                setCart([]);
                setCartIsOpen(false);
                alert("Compra realizada com sucesso!");
            })
        }
    }

    return(
        <Main onClick={()=>setCartIsOpen(!cartIsOpen)} cartIsOpen={cartIsOpen}>
            <Container onClick={(e)=>e.stopPropagation()}>
                <CloseButton onClick={()=>setCartIsOpen(false)}>X</CloseButton>
                <div>
                    <IconContext.Provider value>
                        {cart.length === 0 ?
                        <EmptyMessage>
                            <FaShoppingCart size={"60px"} color={"#515151"} />
                            <p>{"Carrinho vazio :)"}</p>
                        </EmptyMessage>
                        :
                        <Product>
                            {cart.map((p,i)=> 
                                <EachProduct key={i}>
                                    <Description>
                                        <IoTrashBin size={"30px"} cursor={"pointer"} onClick={()=>removeProduct(p)}/>
                                        <img src={p.product.image} alt={p.product.name}></img>
                                        <Price>
                                            <p>{p.product.name}</p>
                                            <span>${((p.product.price.replace(",",".") * p.qtd).toFixed(2)).replace(".",",")}</span>
                                        </Price>
                                    </Description>
                                    <Buttons>
                                        <span>{p.qtd}</span>
                                        <button onClick={()=>increaseQtd(p)}>+</button>
                                        <button onClick={()=>decreaseQtd(p)}>-</button>  
                                    </Buttons>
                                </EachProduct>
                            )}
                                <Footer>
                                    <h1>Total: {(Total.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' }).replace(".",","))}</h1>
                                    <button onClick={()=>attemptToPurchase()}>Finalizar compra</button>
                                    <button onClick={()=>{setCart([]);localStorage.clear()}}>Limpar o carrinho</button>
                                    
                                </Footer>
                        </Product>
                        }
                    </IconContext.Provider>
                </div>
            </Container>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => props.cartIsOpen ? "block" : "none"};
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 450px){
        display: none;
    }
`

const Container = styled.div`
    width: fit-content;
    height: 100%;
    background-color: #fff;
    position: fixed;
    right: 0;
    top: 50px;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 25px;
    cursor: pointer;
`

const EmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    min-width: 365px;
    align-items: center;
    p{
        padding-top: 40px;
    }
`

const Description = styled.div`
    display: flex;
    max-width: 300px;
    min-width: 250px;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
    }
`

const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        padding-top: 80px;
        padding-bottom: 50px;
    }
    button{
        border: none;
        width: 200px;
        height: 40px;
        cursor: pointer;
        background-color: #f6e9c7;
        border-radius: 5px;
    }
`

const Price = styled.div`
    display: flex;
    align-items: center;
    p{
        max-width: 110px;
        min-width: 110px;
    }
    span{
        padding-left: 10px;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    button{
        margin-top: 20px;
    }
`

const EachProduct = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        width: 35px;
        height: 35px;
        gap: 5px;
        outline: none;
        background-color: #f6e9c7;
        cursor: pointer;
        margin-left: 5px;
    }
    span{
        padding-right: 20px;
        padding-left: 5px;
    }
`



export default Cart