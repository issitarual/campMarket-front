import styled from 'styled-components';

const DeliveryContainer = styled.div`
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



export {DeliveryContainer, Local, Transportation}