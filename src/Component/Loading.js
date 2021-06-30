import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function Loading(){
    return(
        <Container>
            <Loader type="TailSpin" color="#3F3F40" height={80} width={80} />
            <h1>Loading</h1>
            <span>
                <Loader type="ThreeDots" color="#3F3F40" height={20} width={20} />
            </span>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin: 20px auto;
    span{
        position: absolute;
        bottom: -9px;
        right: -25px;
    }
    h1{
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        color: #3F3F40;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
    }
`