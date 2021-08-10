import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding-right: 30px;
  padding-left: 230px;
  .carousel-container {
    z-index: 0;
  }
  @media (max-width: 450px) {
    padding-left: 30px;
    margin-left: 0;
    margin-top: 130px;
  }
`;

const DeliveryContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  z-index: 10;
`;

const Local = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  p {
    color: #000;
    margin-left: 5px;
  }
  h6 {
    font-weight: bold;
    color: #ef4f4f;
    margin-left: 5px;
  }
  div {
    background-color: #ccc;
    width: 2px;
    height: 20px;
    margin-left: 5px;
  }
  span {
    display: flex;
    @media (max-width: 450px) {
      flex-direction: column;
    }
  }
`;

const Transportation = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    text-align: end;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 10px;
  p {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #3f3f40;
    font-weight: bold;
    letter-spacing: 2px;
  }
  button {
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #3f3f40;
    text-align: center;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

const ProductContainer = styled.div`
  border: 2px solid #ccc;
  width: 230px;
  height: 330px;
  border-radius: 5px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  @media (max-width: 750px) {
    margin: auto;
  }
  img {
    width: 210px;
    height: 210px;
    margin-bottom: 5px;
  }
  h6 {
    color: #4a4a4a;
    margin-bottom: 5px;
    text-align: center;
  }
  p {
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
    position: absolute;
    bottom: 40px;
  }
  button {
    background-color: #ef4f4f;
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    bottom: 15px;
  }
  span {
    color: #fff;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1px;
  }
`;

const FooterContainer = styled.footer`
  margin-top: 20px;
  height: 150px;
  border-top: solid 2px #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 770px) {
    flex-direction: column;
    height: ${(props) => (props.page === "category" ? "350px" : "300px")};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #3f3f40;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  @media (max-width: 770px) {
    margin-top: 10px;
  }
`;

const CreditCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h5 {
    font-family: "Roboto", sans-serif;
    text-align: center;
    color: #3f3f40;
    font-size: 16px;
    margin-bottom: 20px;
  }
  img {
    width: 200px;
  }
  @media (max-width: 770px) {
    margin-top: 10px;
  }
`;

const Media = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Roboto", sans-serif;
    text-align: center;
    color: #3f3f40;
    font-size: 16px;
    margin-bottom: ${(props) => (props.page === "category" ? "0px" : "10px")};
  }
  span {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  div {
    background-color: #3f3f40;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  @media (max-width: 770px) {
    margin: 10px 0px 20px 0px;
  }
`;

export {
  DeliveryContainer,
  Local,
  Transportation,
  Container,
  Category,
  ProductContainer,
  FooterContainer,
  CreditCard,
  Logo,
  Media,
};
