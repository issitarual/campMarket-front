import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";



function Products() {
  return (
    <Main>
        <Header />
        <Sidebar />
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  height: 100vh;
`;

export default Products;
