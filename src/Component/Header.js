import { useState } from "react";
import { BsSearch, BsFillPersonFill, BsBoxArrowRight } from 'react-icons/bs';
import { IoFastFoodSharp } from "react-icons/io5";
import { FiHome, FiShoppingCart } from 'react-icons/fi'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconContext } from 'react-icons'
import 'react-pro-sidebar/dist/css/styles.css';
import axios  from 'axios';
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router";
import { useContext } from 'react';
import {DebounceInput} from 'react-debounce-input';

function Header(){
    const {user} = useContext(UserContext);
    const [ showProducts, setShowProducts ] = useState(false);
    const [ showSearch, setShowSearch ] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const history=useHistory();

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
            alert("Something wrong happened!")
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
                        <IoFastFoodSharp onClick={()=>{setShowSearch(false);setShowProducts(!showProducts)}} style={{width: "25px", height: "25px"}}/>
                        <BsSearch onClick={()=>{setShowProducts(false);setShowSearch(!showSearch)}} style={{width: "25px", height: "25px"}}/>
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