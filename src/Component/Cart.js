import styled from "styled-components";
import { useState, useContext } from 'react';
// import axios from 'axios';
// import { useHistory } from "react-router";
import CartContext from "../Context/CartContext";
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons'

function Cart({ cartIsOpen, setCartIsOpen }){
    const {cart, setCart} = useContext(CartContext);
    return(
        <Container onClick={()=>setCartIsOpen(!cartIsOpen)} cartIsOpen={cartIsOpen}>
            <Main onClick={(e)=>e.stopPropagation()}>
                <CloseButton onClick={()=>setCartIsOpen(false)}>X</CloseButton>
                <CartContent>
                    <IconContext.Provider value>
                        <EmptyMessage>
                            <FaShoppingCart size={"50px"} color={"#515151"} />
                            <p>Empty cart :(</p>
                        </EmptyMessage>
                    </IconContext.Provider>
                </CartContent>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => props.cartIsOpen ? "block" : "none"};
    position: fixed;
    right: 0;
    z-index: 999;
    @media (max-width: 450px){
        display: none;
    }
`

const Main = styled.div`
    width: 25vw;
    min-width: 250px;
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
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 25px;
    cursor: pointer;
`

const CartContent = styled.div`
    display: flex;
    flex-direction: column;
`

const EmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default Cart