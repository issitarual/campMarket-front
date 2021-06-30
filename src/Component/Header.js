import { useState } from "react";
import { BsSearch, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons'
import 'react-pro-sidebar/dist/css/styles.css';
import Loader from "react-loader-spinner";
import axios  from 'axios';
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router";
import { useContext } from 'react';


function Header({isOpen ,setIsOpen}){
    const [ clicked, setClicked ] = useState(false);

    const {user,setUser} = useContext(UserContext);
const history=useHistory();  

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
                        <BsBoxArrowRight style={{width: "25px", height: "25px"}} onClick={()=>(logOut())}/>
                    </Container>
                    <ProductsMenu showProducts={showProducts} >
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
                    <Search showSearch={showSearch}>
                        <Form onSubmit={AttemptToSearch} >
                            <Input 
                                type="text"
                                disabled={disable}
                                value={searchText}
                                onChange={(e)=>{setSearchText(e.target.value)}}
                                placeholder="Search bar"
                            />
                            <Button type="submit">{disable === true ? <Loader type="ThreeDots" color="#FFF" height={35} width={45}/> : "Entrar" }</Button>
                        </Form>
                    </Search>
                </Main>
            </IconContext.Provider>
        </>
    )
}

const Main = styled.div`
    display: none;
    font-family: 'Roboto', sans-serif;
@media (max-width: 450px){
        position: fixed;
        display: flex;
        position: fixed;
        width: 100%;
        top: 50px;
        left: 0;
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
    height: 150px;
    background-color: #fff;
    justify-content: space-between;
    padding-top: 95px;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
`

const Input = styled.input`
    width: 75vw;
    height: 35px;
    outline: none;
    border-radius: 5px;
    background-color: #b3e4e1;
    border: none;
    padding-left: 10px;
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