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
        margin-top: 130px;
    }
    h1{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #3F3F40;
        font-weight: bold;
        letter-spacing: 1px;
        margin-top: 20px;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        margin: 20px auto;
    }
`;

export { Container }