import { useState } from "react";
import { BsSearch, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons'
import 'react-pro-sidebar/dist/css/styles.css';

function Header(){
    const [ clicked, setClicked ] = useState(false);
    return(
        <>
            <IconContext.Provider value>
                <Main>
                    <Container>
                        <Link to={"/"}>
                            <FiHome style={{width: "25px", height: "25px"}}/>
                        </Link>
                        <Link to={"/cart"}>
                            <FiShoppingCart style={{width: "25px", height: "25px"}}/>
                        </Link>
                        <Link to={"/profile"}>
                            <BsFillPersonFill style={{width: "25px", height: "25px"}}/>
                        </Link>
                        <IoFastFoodSharp onClick={()=>setClicked(!clicked)} style={{width: "25px", height: "25px"}}/>
                        <BsSearch style={{width: "25px", height: "25px"}}/>
                        <BsBoxArrowRight style={{width: "25px", height: "25px"}}/>
                    </Container>
                    <ProductsMenu click={clicked} >
                        <Link to={"/vegetables"}>
                            <p>Vegetables</p>
                        </Link>
                        <Link to={"/meat"}>
                            <p>Meat</p>
                        </Link>
                        <Link to={"/cold"}>
                            <p>Cold Products</p>
                        </Link>
                    </ProductsMenu>
                </Main>
            </IconContext.Provider>
        </>
    )
}

const Main = styled.div`
    display: none;
    font-family: 'Roboto', sans-serif;
@media (max-width: 450px){
        display: flex;
        flex-direction: column;
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
    display: ${props => props.click === true ? "flex" : "none"};
    width: 100vw;
    height: 150px;
    background-color: #fff;
    justify-content: space-between;
    p{
        padding: 105px 20px 0px 20px;
    }
`

export default Header;