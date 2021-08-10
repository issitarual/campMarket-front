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
    let Total = 0;
    useEffect(()=>{
        if(localStorage.cart){
            setCart(JSON.parse(localStorage.getItem("cart")));
        }
    },[]) //eslint-disable-line
    if(cart){
        cart.map(p => {
            let sum = ((p.product.price.replace(",",".") * p.qtd))
            Total = Total + sum
        })
    }


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
            if(cart.length === 0){
                alert("Carrinho vazio!");
                return
            }
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
            }; 
            const body = {
                cart,
            }
            const req = axios.post(`${process.env.REACT_APP_API_BASE_URL}/finish`, body, config)
            req.then(()=>{
                localStorage.clear();
                setCart([]);
                setCartIsOpen(false);
                alert("Compra realizada com sucesso!");
            })
            req.catch(()=>{
                alert("Algo deu errado, tente mais tarde!");
            });
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
    div{
        max-height: 100%;
    }
    @media (max-width: 450px){
        display: none;
    }
`

const Container = styled.div`
    max-width: 380px;
    min-width: 380px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    right: 0;
    top: 50px;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    /* width */
    ::-webkit-scrollbar {
    width: 4px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background-image: linear-gradient(#f6e9c7, #b3e4e1);
    }
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
    max-width: 380px;
    min-width: 380px;
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
    max-height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    h1{
        padding-top: 35px;
        padding-bottom: 20px;
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
        word-break: break-word;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 70px;
    button{
        margin-top: 20px;
    }
`

const EachProduct = styled.div`
    max-width: 365px;
    min-width: 365px;
    height: fit-content;
    display: flex;
    align-items: center;
    box-sizing: border-box;
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
        width: 10px;
        padding-right: 20px;
        padding-left: 15px;
    }
`



export default Cart