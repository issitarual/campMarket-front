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
        margin-top: 100px;
    }
`;

const Product = styled.div`
    margin: 20px 0;
    img{
        width: 400px;
        border-radius: 5px;
    }
`;

export {Container, Product};