import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
import axios from "axios";
import Home from "../Component/Home/Home";
import {DebounceInput} from 'react-debounce-input';

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [productsList, setProductsList] = useState([]);

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

  return (
    <Main>
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home />
      <SearchArea isOpen={isOpen}>
        <Search>
          <ResultMenu>
            <DebounceInput 
              type="text"
              value={searchText}
              debounceTimeout={300}
              className="debounceInput"
              onChange={(e)=>{AttemptToSearch(e);setSearchText(e.target.value)}}
              placeholder="Search bar"
            />
            <Result showResult={showResult}>
              {productsList.length ? 
                productsList.map((p,i) =>(
                  <Item key={i}>
                    <img src={p.image} alt={p.name}></img>
                    <span>{p.name}</span>
                  </Item>
                ))
                :
                <span></span>
              }
            </Result>
          </ResultMenu>
          <Button>
            <button onClick={()=>{setSearchText("");setIsOpen(false);setProductsList([]);}}>Cancel</button>
          </Button>
        </Search>
      </SearchArea>
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`

const SearchArea = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: fit-content;
  position: fixed;
  padding: 20px 0px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: clamp(220px, 50%, 35%);
  border-radius: 5px;
  background: #fff;
  z-index: 10;
  @media (max-width: 450px) {
    display: none;
  }
`

const Search = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

const Button = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: center;
  button{
    width: 45%;
  height: 35px;
  border: none;
  background-color: #b3e4e1;
  border-radius: 5px;
  }
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

export default Products;
