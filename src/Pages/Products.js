import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [searchText, setSearchText] = useState("");

  function AttemptToSearch(e){
    e.preventDefault();
    if(searchText.length === 0) return alert("Empty search bar!");
    // setDisable(true);
    alert("Feature ainda não implementada");
}

  return (
    <Main>
      <Header />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchArea isOpen={isOpen}>
        <Search>
          <Input 
              type="text"
              disabled={disable}
              value={searchText}
              onChange={(e)=>{setSearchText(e.target.value)}}
              placeholder="Search bar"
              onKeyPress={(e) => { if (e.code === "Enter"||e.code==="NumpadEnter") { AttemptToSearch(e) } }}
          />
          <Buttons>
            <Button onClick={(e)=>AttemptToSearch(e)}>{disable === true ? <Loader type="ThreeDots" color="#FFF" height={35} width={45}/> : "Search" }</Button>
            <Button onClick={()=>setIsOpen(false)}>{disable === true ? <Loader type="ThreeDots" color="#FFF" height={35} width={45}/> : "Cancel" }</Button>
          </Buttons>
        </Search>
      </SearchArea>
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  height: 100vh;
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
  position: absolute;
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

const Input = styled.input`
  height: 50px;
  outline: none;
  border-radius: 5px;
  background-color: #b3e4e1;
  border: none;
  padding-left: 10px;
  font-size: 18px;
  text-align: center;
`

const Buttons = styled.div`
  display: flex;
  padding-top: 70px;
  justify-content: space-between;

`

const Button = styled.button`
  width: 45%;
  height: 35px;
  border: none;
  background-color: #b3e4e1;
  border-radius: 5px;
`

export default Products;
