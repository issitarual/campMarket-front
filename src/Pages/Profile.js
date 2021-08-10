import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Delivery from "../Component/Home/Delivery";
import SearchFeature from "../Component/SearchFeature";
import styled from "styled-components";
import { useState } from "react";
import Cart from "../Component/Cart";
import ProfilePage from "../Component/Profile/ProfilePage";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Main>
        <Header />
        <Delivery />
        <ProfilePage />
        <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          cartIsOpen={cartIsOpen}
          setCartIsOpen={setCartIsOpen}
        />
        <SearchFeature isOpen={isOpen} setIsOpen={setIsOpen} />
      </Main>
    </>
  );
}

const Main = styled.div`
  background-image: linear-gradient(#f6e9c7, #b3e4e1);
  width: 100vw;
  height: 100%;
  min-height: calc(100vh - 50px);
  font-family: "Roboto", sans-serif;
`;
