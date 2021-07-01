import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";
import UserContext from "../Context/UserContext";

function Login(){

const {setUser} = useContext(UserContext);
const history=useHistory();     
const [loading,setLoading]=useState(false);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

function login(e){
    e.preventDefault();
    const body = { email, password };
    const request = axios.post(
      "https://git.heroku.com/back-campmarket.git/Login",
      body
    );

    setLoading(true);

    request.then((response) => {

      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      history.push("/");
    });

    request.catch((error) => {
        setLoading(false);
        if(error.response.status===401) alert("Falha no login, email ou senha incorretos!");
     
    });
} 


    return(
<>
<Body>
<Logo>CampMarket</Logo>



<form onSubmit={login}>

<Info>
<input
type="email"
required
placeholder="E-mail"
value={email} 
onChange={e => setEmail(e.target.value)} 
disabled={loading}
/>  

<input
type="password"
required
placeholder="Senha"
value={password} 
onChange={e => setPassword(e.target.value)} 
disabled={loading}
/>  

<div onClick={()=>(history.push("/change_password"))}><span class="password">Esqueceu a senha?</span></div>


<button  type="submit" required isdisabled={loading} >
 {!loading ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={45} width={50}/>}
</button> 

</Info>
</form>

<span onClick={()=>(history.push("/SignUp"))}> Primeira vez? Crie uma conta!</span>

</Body>
</>

    );

}

const Body =styled.div `
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  height: 100vh;
  display:flex;
  align-items:center;
  flex-direction: column;
div{
    display: flex;
    align-items: flex-start;
    span{
        text-decoration-line: none;
        color:#5F9EA0;
    }
}
span{
    cursor:pointer;
    color: grey;
    font-size: 20px;
    text-decoration-line: underline;

}
`;

const Logo = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin:50px;
    display: flex;
    height: 60px;
    font-size: 40px;
    color: #000;
    align-items: center;
    justify-content: center;
    text-align: center;

`;

const Info =styled.div ` 

display: flex;
flex-direction:column ;
align-items: center;
justify-content: space-between;


input{
width: 429px;
height: 58px;
background: #fff;
border-radius: 5px;
border:none;
margin-bottom: 13px;
padding: 5px;
}

button{
cursor:pointer;
margin-top:40px;
margin-bottom:50px;
width: 429px;
height: 58px;
background:#ebe6d8;
border:none;
border-radius: 5px;
padding:13px;
display:flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 20px;
line-height: 23px;
color: grey;
}

@media (max-width: 450px){
width:90vw;
input{
    width: 100%;
}
button{
    width:100%;
}
}
`;


export default Login;