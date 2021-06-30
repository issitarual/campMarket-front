import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding-right: 30px;
    padding-left: 30px;
    margin-left: 200px;
    @media (max-width: 450px){
        margin-left: 0;
        margin-top: 100px;
    }
`;

const DeliveryContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
`;

const Local = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    p{
        color: #000;
        margin-left: 5px;
    }
    h6{
       font-weight: bold;
       color:#EF4F4F;
       margin-left: 5px;
    }
    div{
        background-color: #ccc;
        width: 2px;
        height: 20px;
        margin-left: 5px;
    }
`;

const Transportation = styled.div`
    display: flex;
    align-items: center;
    p{
        margin-right: 10px;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        text-align: end;
    }
`;

const Category = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 10px;
    p{
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        color: #3F3F40;
        font-weight: bold;
        letter-spacing: 2px;
    }
    button{
        background-color: #fff;
        border-radius: 5px;
        border: 2px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        color: #3F3F40;
        text-align: center;
        padding: 5px 10px;
        cursor: pointer;
    }
`;

const AllProducts = styled.div`
    display: flex;
    margin-bottom: 20px; 
    justify-content: space-between;
    @media (max-width: 1230px){
        overflow-x: scroll;
    }
`;

const ProductContainer = styled.div`
    border: 2px solid #ccc;
    width: 230px;
    border-radius: 5px;
    padding: 15px 10px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    img{
        width: 210px;
        height: 210px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    h6{
        color: #4A4A4A;
        margin-bottom: 5px;
        text-align: center;
        cursor: pointer;
    }
    p{
        font-weight: bold;
        color: #000;
        margin-bottom: 5px;
    }
    button{
        background-color: #EF4F4F;
        border: none;
        border-radius: 5px;
        padding: 5px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    span{
        color: #fff;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    }
`;

const FooterContainer = styled.footer`
    height: 150px;
    border-top: solid 2px #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 770px){
        flex-direction: column;
        height: 300px;
    }
`; 

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: #3F3F40;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    @media (max-width: 770px){
        margin-top: 10px;
    }
`;

const CreditCard = styled.div`
    h5{
        font-family: 'Roboto', sans-serif;
        text-align: center;
        color: #3F3F40;
        font-size: 16px;
        margin-bottom: 20px;
    }
    img{
        width: 200px;
    }
    @media (max-width: 770px){
        margin-top: 10px;
    }
`;

const Media = styled.div`
    p{
        font-family: 'Roboto', sans-serif;
        text-align: center;
        color: #3F3F40;
        font-size: 16px;
        margin-bottom: 10px;   
    }
    span{
        display: flex;
        justify-content: space-between;
    }
    div{
        background-color: #3F3F40;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    @media (max-width: 770px){
        margin: 10px 0px 20px 0px;
    }
`;

export {DeliveryContainer, Local, Transportation, Container, Category, ProductContainer, AllProducts, FooterContainer, CreditCard, Logo, Media}