import { useState, useEffect } from "react";
import { BsSearch, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons'
import 'react-pro-sidebar/dist/css/styles.css';
import axios  from 'axios';
import CartContext from "../Context/CartContext";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router";
import { useContext } from 'react';
import {DebounceInput} from 'react-debounce-input';
import { IoTrashBin } from "react-icons/io5";
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';


function Header(){
    const {user} = useContext(UserContext);
    const {cart, setCart} = useContext(CartContext);
    const [showProducts, setShowProducts] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const history=useHistory();
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

    function AttemptToSearch(e){
        if(e.target.value.length === 0){
            setProductsList([]);
            return
          } 
          const req = axios.get(`http://localhost:4000/search?search=${e.target.value}`);
          req.then(({data})=>{
            setShowResult(true);
            setProductsList(data);
          });
          req.catch((err)=>{
            alert("Alguma coisa errada aconteceu, tente novamente!")
        });
    }

    function goToProduct(id){
        setShowSearch(false);
        setSearchText("");
        setProductsList([]);
        history.push(`/product/${id}`);
      }

    function logOut(){
      if (!user) return;
       const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
        }; 
      
        const request = axios.delete(
        "http://localhost:4000/logOut",
        config
        );
        request.then((response) => {
            localStorage.removeItem("user") 
            history.push("/Login")
        });
    
        request.catch((error) => {
        alert("Falha ao sair!")
        });
    }

    function increaseQtd(product){
        product.qtd = product.qtd+1
        setCart([...cart])
    }

    function decreaseQtd(product){
        product.qtd = product.qtd-1
        if(product.qtd === 0){
            const newCartFiltered = cart.filter((item)=>item !== product);
            setCart([...newCartFiltered])
        } else {
            setCart([...cart])
        }
    }

    function removeProduct(product){
        const newCartFiltered = cart.filter((item)=>item !== product);
        setCart([...newCartFiltered])
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
            const req = axios.post('http://localhost:4000/finish', body, config)
            req.then(()=>{
                localStorage.clear();
                setCart([]);
                setShowCart(false);
                alert("Compra realizada com sucesso!");
            })
        }
    }

    return(
        <>
            <IconContext.Provider value>
                <Main>
                    <Container>
                        <Link to={"/"}>
                            <FiHome style={{width: "25px", height: "25px"}}/>
                        </Link>
                        <FiShoppingCart onClick={()=> {setShowSearch(false);setShowProducts(false);setShowCart(!showCart)}} style={{width: "25px", height: "25px"}}/>
                        <Link to={"/profile"}>
                            <BsFillPersonFill style={{width: "25px", height: "25px"}}/>
                        </Link>
                        <IoFastFoodSharp onClick={()=>{setShowCart(false);setShowSearch(false);setShowProducts(!showProducts)}} style={{width: "25px", height: "25px"}}/>
                        <BsSearch onClick={()=>{setShowCart(false);setShowProducts(false);setShowSearch(!showSearch)}} style={{width: "25px", height: "25px"}}/>
                        {user ? 
                            <BsBoxArrowRight style={{width: "25px", height: "25px"}} onClick={()=>(logOut())} />
                            :
                            <Link to={"/Login"}>
                                <AiOutlineLogin style={{width: "25px", height: "25px"}}/>
                            </Link>
                        }
                    </Container>
                    <ProductsMenu showProducts={showProducts} >
                        <Link to={"/category/vegetables"}>
                            <p>Vegetables</p>
                        </Link>
                        <Link to={"/category/meat"}>
                            <p>Meat</p>
                        </Link>
                        <Link to={"/category/cold"}>
                            <p>Cold Products</p>
                        </Link>
                    </ProductsMenu>
                    <Search showSearch={showSearch}>
                            <ResultMenu>
                                <DebounceInput 
                                    type="text"
                                    value={searchText}
                                    debounceTimeout={300}
                                    className="debounceInputHeader"
                                    onChange={(e)=>{AttemptToSearch(e);setSearchText(e.target.value)}}
                                    placeholder="Search bar"
                                />
                                <Result showResult={showResult}>
                                    {productsList.length ? 
                                        productsList.map((p,i) =>(
                                            <Item key={i} onClick={()=>goToProduct(p.id)}>
                                                <img src={p.image} alt={p.name}></img>
                                                <span>{p.name}</span>
                                            </Item>
                                        ))
                                        :
                                        <span></span>
                                    }
                                </Result>
                            </ResultMenu>
                            <Button onClick={()=>{setSearchText("");setShowSearch(false);setProductsList([]);}}>Cancel</Button>
                    </Search>
                    <AllCartMobile showCart={showCart}>
                        {cart.length === 0?
                            <EmptyMessage>
                                <FaShoppingCart size={"60px"} color={"#515151"} />
                                <p>{"Carrinho vazio :)"}</p>
                            </EmptyMessage>
                            :
                        <CartMobile>
                            {cart.map((p,i)=>
                                <EachProductOnCartMobile key={i}>
                                    <IoTrashBin size={"30px"} cursor={"pointer"} onClick={()=>removeProduct(p)}/>
                                    <img src={p.product.image} alt={p.product.name}></img>
                                    <Price>
                                        <p>{p.product.name}</p>
                                        <span>${((p.product.price.replace(",",".") * p.qtd).toFixed(2)).replace(".",",")}</span>
                                    </Price>
                                    <Buttons>
                                        <span>{p.qtd}</span>
                                        <button onClick={()=>increaseQtd(p)}>+</button>
                                        <button onClick={()=>decreaseQtd(p)}>-</button>  
                                    </Buttons>

                                </EachProductOnCartMobile>
                            )}
                                <Footer>
                                    <h1>Total: {(Total.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' }).replace(".",","))}</h1>
                                    <button onClick={()=>attemptToPurchase()}>Finalizar compra</button>
                                    <button onClick={()=>{setCart([]);localStorage.clear()}}>Limpar o carrinho</button>
                                </Footer>
                        </CartMobile>
                        }
                    </AllCartMobile>
                </Main>
            </IconContext.Provider>
        </>
    )
}

const Main = styled.div`
    display: none;
    font-family: 'Roboto', sans-serif;
@media (max-width: 450px){
        z-index: 10;
        position: fixed;
        display: flex;
        position: fixed;
        width: 100%;
        top: 50px;
        left: 0;
        flex-direction: column;
}
`

const EmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    padding-top: 95px;
    p{
        padding-top: 80px;
    }
`

const CartMobile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding-top: 95px;
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

const AllCartMobile = styled.div`
    display: ${props => props.showCart === true ? "flex" : "none"};
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        border: none;
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
        padding-left: 25px;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    button{
        margin-top: 20px;
        border: none;
        width: 200px;
        height: 40px;
        cursor: pointer;
        background-color: #f6e9c7;
        border-radius: 5px;
    }
    h1{
        padding-top: 80px;
    }
`

const EachProductOnCartMobile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 50px;
        height: 50px;
    }
`

const Container = styled.div`
    width: 100vw;
    background-color: #fff;
    height: 10vh;
    position: absolute;
    left: 0;
    display: flex;
    padding: 0px 7px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(219, 219, 219);
`

const ProductsMenu = styled.div`
    display: ${props => props.showProducts ? "flex" : "none"};
    width: 100vw;
    height: 150px;
    background-color: #fff;
    justify-content: space-between;
    p{
        padding: 105px 20px 0px 20px;
    }
`

const Search = styled.div`
    display: ${props => props.showSearch === true ? "flex" : "none"};
    width: 100vw;
    height: fit-content;
    padding-bottom: 10px;
    background-color: #fff;
    justify-content: space-between;
    padding-top: 95px;
    justify-content: center;
    border-radius:5px;
`

const Result = styled.div`
  display: ${props => props.showResult ? "flex" : "none"};
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  height: fit-content;
  gap: 10px;
  span {
    color: #515151;
    font-size: 17px;
    padding-left: 5px;
  }
`

const ResultMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  img{
    width: 40px;
  }
`

const Button = styled.button`
    width: 60px;
    height: 35px;
    margin-left: 10px;
    border: none;
    background-color: #b3e4e1;
    border-radius: 5px;   
`

export default Header;