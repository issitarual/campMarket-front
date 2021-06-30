import styled from 'styled-components';
import Loader from "react-loader-spinner";
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";

function SignUp(){

const history=useHistory();     
const [loading,setLoading]=useState(false);
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [confirmPassword,setConfirmPassword]=useState("");

function signUP(e){
    e.preventDefault();

    if(password!==confirmPassword){
      alert("Passwords do not match, check again ");
      return;
    }
    
    const body = { name, email, password, confirmPassword };
    const request = axios.post(
      "http://localhost:4000/signUp",
      body
    );

    setLoading(true);

    request.then((response) => {
      history.push("/Login");
    });

    request.catch((error) => {
     if(error.response.status===409) alert("Email address already registered!");
      
      else alert("Login Failed - Email or Password is Incorrect");
      setLoading(false);
    });
}        
 


    return(
<>
<Body>
<Logo>CampMarket</Logo>



<form onSubmit={signUP}>

<Info>

<input
type="text"
required
placeholder="Name"
value={name} 
onChange={e => setName(e.target.value)} 
disabled={loading}
/>  


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
placeholder="Password"
value={password} 
onChange={e => setPassword(e.target.value)} 
disabled={loading}
/>  

<input
type="password"
required
placeholder="Confirm password"
value={confirmPassword} 
onChange={e => setConfirmPassword(e.target.value)} 
disabled={loading}
/>  


<button  type="submit" required isdisabled={loading} >
 {!loading ? "Sign Up" : <Loader type="ThreeDots" color="#FFF" height={45} width={50}/>}
</button> 

</Info>
</form>

<span onClick={()=>(history.push("/Login"))}> Switch back to log in</span>

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


export default SignUp;