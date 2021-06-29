import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const DeliveryContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
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
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 20px;
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
        padding: 5px;
    }
`;


export {DeliveryContainer, Local, Transportation, Container, Category}