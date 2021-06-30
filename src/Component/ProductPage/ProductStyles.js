import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding-right: 30px;
    padding-left: 30px;
    margin-left: 200px;
    @media (max-width: 450px){
        margin-left: 0;
        margin-top: 125px;
    }
`;

const Product = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 930px){
        flex-direction: column;
    }
    img{
        width: calc(50% - 10px);
        border-radius: 5px;
        @media (max-width: 930px){
            width: 90%;
            margin-bottom: 20px;
        }
    }
    div{
        width: calc(50% - 10px);
        @media (max-width: 930px){
            width: 90%;
        }
    }
    h2{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #3F3F40;
        font-weight: bold;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    button{
        background-color: #EF4F4F;
        border: none;
        border-radius: 5px;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        color: #fff;
        padding: 5px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    h3{
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: #000;
    }
    h4{
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: #4A4A4A;
        margin-bottom: 10px;
        border-bottom: solid 1px #ccc;
        line-height: 40px;
    }
    p{
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        color: #4A4A4A;
        text-align: justify;
        line-height: 20px;
    }
`;

export {Container, Product};