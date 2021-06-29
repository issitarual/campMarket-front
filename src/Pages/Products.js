import styled from "styled-components";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";

import Home from "../Component/Home/Home";

function Products() {
  return (
    <Main>
        <Header />
        <Sidebar />
        <Home />
    </Main>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  height: 100%;
`;

export default Products;
