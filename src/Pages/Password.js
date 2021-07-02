import { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import axios from 'axios';

export default function Password(){
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");
const [loading,setLoading]=useState("");
const history=useHistory();

function ChangePassword (e){
    e.preventDefault();

    if(password!==confirmPassword){
      alert("Passwords do not match, check again ");
      return;
    }
    
    const body = { email, password, confirmPassword };
    const request = axios.put(
      "https://back-campmarket.herokuapp.com/change_password",
      body
    );

    setLoading(true);

    request.then((response) => {
      setLoading(false);
      alert("password was successfully changed!");
      history.push("/Login");
    });

    request.catch((error) => {
      setLoading(false);
      if(error.response.status===404) alert("Email address is not registered!");
      else alert(" Unable to update the password")
    });
}     


    return(
        <Body>
        <Logo>CampMarket</Logo>

        <h1>Mudar Senha</h1>
  

        <form onSubmit={ChangePassword}>

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

<input
type="password"
required
placeholder="Confirmar Senha"
value={confirmPassword} 
onChange={e => setConfirmPassword(e.target.value)} 
disabled={loading}
/> 


<button  type="submit" required isdisabled={loading} >
 {!loading ? "Enviar" : <Loader type="ThreeDots" color="#FFF" height={45} width={50}/>}
</button> 

<span onClick={()=>(history.push("/Login"))} class="password">Voltar para o login</span>

</Info>
</form>

    </Body>
    )
}

const Body = styled.div `
 background-image: linear-gradient(#f6e9c7, #b3e4e1); 
  padding:30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    margin-top:50px;
    margin-bottom:30px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    display: flex;
    font-size: 40px;
    color: #696969;
    text-align: center;    
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
    display: flex;
    height: 60px;
    font-size: 35px;
    color: #000;
    font-weight: bold;
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
