import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Home from "../Component/Home/Home";
import {DebounceInput} from 'react-debounce-input';

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [productsList, setProductsList] = useState([]);
  console.log(searchText)

  function AttemptToSearch(e){
    e.preventDefault();
    if(searchText.length === 0) return alert("Empty search bar!");
    const body = {
      searchText,
    }
    const request = axios.get('http://localhost:4000/products/search/',body);
    request.then(({data}) =>{
      setShowResult(true);
      setProductsList(data);
    });
    // setDisable(true);
    // alert("Feature ainda não implementada");
}

  return (
    <Main>
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home />
      <SearchArea isOpen={isOpen}>
        <Search>
          <DebounceInput 
              type="text"
              disabled={disable}
              value={searchText}
              minLength={2}
              debounceTimeout={0}
              className="debounceInput"
              onChange={(e)=>{setSearchText(e.target.value)}}
              placeholder="Search bar"
              onKeyPress={(e) => { if (e.code === "Enter"||e.code==="NumpadEnter") { AttemptToSearch(e) } }}
          />
          {/* <Result showResult={showResult}>
          </Result> */}
          <Buttons>
            <Button onClick={(e)=>AttemptToSearch(e)}>{disable === true ? <Loader type="ThreeDots" color="#FFF" height={35} width={45}/> : "Search" }</Button>
            <Button onClick={()=>{setIsOpen(false);setSearchText("")}}>{disable === true ? <Loader type="ThreeDots" color="#FFF" height={35} width={45}/> : "Cancel" }</Button>
          </Buttons>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 350px;
  position: fixed;
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

const Buttons = styled.div`
  display: flex;
  padding-top: 70px;
  justify-content: space-between;
`

const Result = styled.div`
  display: ${props => props.showResult ? "flex" : "none"};
  /* position: absolute;
  top: 39px;
  z-index: -1;
  left: 0;
  width: 100%;
  background-color: #E5E5E5;
  border-radius: 0 0 8px 8px;
  padding: 20px 17px 23px 17px;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  max-height: 500px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #e5e5e5 #151515; */
  span {
      color: #515151;
      font-size: 17px;
  }
  /* Works on Chrome, Edge, and Safari
  &::-webkit-scrollbar {
  width: 10px;
  }
  &::-webkit-scrollbar-track {
  background: none;
  }
  &::-webkit-scrollbar-thumb {
  background-color: #151515;
  border: 3px solid #151515;
  border-radius: 10px;
  } */

`

const Button = styled.button`
  width: 45%;
  height: 35px;
  border: none;
  background-color: #b3e4e1;
  border-radius: 5px;
`

export default Products;
