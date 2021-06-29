import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding-right: 30px;
    padding-left: 30px;
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
    }
`;

const AllProducts = styled.div`
    display: flex;
    margin-bottom: 20px;
    overflow-x: scroll;
`;

const ProductContainer = styled.div`
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 15px 10px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    img{
        width: 210px;
        height: 210px;
        margin-bottom: 5px;
    }
    h6{
        color: #4A4A4A;
        margin-bottom: 5px;
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
    }
    span{
        color: #fff;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 1px;
    }
`;


export {DeliveryContainer, Local, Transportation, Container, Category, ProductContainer, AllProducts}