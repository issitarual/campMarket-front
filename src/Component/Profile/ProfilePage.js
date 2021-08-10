import Footer from "../Home/Footer";
import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../Context/UserContext";
import Account from "./AccountDetails";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router";

export default function ProfilePage() {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const [clicked, setCliked] = useState(false);
  const [nameEdit, setNameEdit] = useState(user ? user.name : "");
  const [emailEdit, setEmailEdit] = useState(user ? user.email : "");

  const [loading, setLoading] = useState(false);

  function EditAccount(e) {
    if (e) e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const body = { name: nameEdit, email: emailEdit };
    const request = axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/Account`,
      body,
      config
    );

    setLoading(true);

    request.then((response) => {
      setCliked(false);
      setLoading(false);
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("Seus dados foram alterados com sucesso!");
    });

    request.catch((error) => {
      alert("Não foi possível fazer essa alteração!");
      setLoading(false);
    });
  }

  return (
    <>
      {user ? (
        <ProfileContainer>
          <h1>Bem-vindo(a), {user.name}!</h1>
          <h2>Meu perfil</h2>

          <UserInfo>
            <form onSubmit={EditAccount}>
              <Account
                user={user.name}
                edit={nameEdit}
                setEdit={setNameEdit}
                clicked={clicked}
                loading={loading}
                text="Nome"
              />
              <Account
                user={user.email}
                edit={emailEdit}
                setEdit={setEmailEdit}
                clicked={clicked}
                loading={loading}
                text="E-mail"
              />
            </form>
            <Buttons>
              {clicked ? (
                <>
                  <button
                    disabled={loading}
                    className="save"
                    onClick={() => EditAccount()}
                  >
                    {!loading ? (
                      "Salvar"
                    ) : (
                      <Loader
                        type="ThreeDots"
                        color="#FFF"
                        height={45}
                        width={50}
                      />
                    )}
                  </button>
                  <button
                    disabled={loading}
                    onClick={() => setCliked(!clicked)}
                  >
                    {!loading ? (
                      "Cancelar"
                    ) : (
                      <Loader
                        type="ThreeDots"
                        color="#FFF"
                        height={45}
                        width={50}
                      />
                    )}
                  </button>
                </>
              ) : (
                <button disabled={loading} onClick={() => setCliked(!clicked)}>
                  {!loading ? (
                    "Editar"
                  ) : (
                    <Loader
                      type="ThreeDots"
                      color="#FFF"
                      height={45}
                      width={50}
                    />
                  )}
                </button>
              )}
            </Buttons>
          </UserInfo>

          <Footer />
        </ProfileContainer>
      ) : (
        <NoUser>
          <span>Cadastre-se ou faça login para acessar seu perfil!</span>

          <button disabled={loading} onClick={() => history.push("/Login")}>
            {!loading ? (
              "Login"
            ) : (
              <Loader type="ThreeDots" color="#FFF" height={45} width={50} />
            )}
          </button>
        </NoUser>
      )}
    </>
  );
}

const NoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: 200px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  span {
    display: block;
    margin-top: 20vw;
    font-size: 30px;
    color: #696969;
    font-weight: bold;
    text-align: center;
  }

  button {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    background-color: #f66a6a;
    border: none;
    border-radius: 10px;
    padding: 5px;
    width: 180px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }

  @media (max-width: 450px) {
    margin-left: 0;
    margin-top: 125px;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  padding-right: 30px;
  padding-left: 30px;
  margin-left: 200px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;

  h1 {
    margin-left: 10px;
    margin-top: 18px;
    margin-bottom: 30px;
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }
  h2 {
    text-align: center;
    font-size: 35px;
    color: #3f3f40;
    font-weight: bold;
    margin-bottom: 60px;
  }

  @media (max-width: 570px) {
    h1 {
      margin-left: 0px;
      margin-top: 18px;
      margin-bottom: 40px;
      font-size: 15px;
    }
  }

  @media (max-width: 450px) {
    margin-left: 0;
    margin-top: 125px;

    h2 {
      font-size: 35px;
      margin-bottom: 60px;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 90px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #ccc;
  border-radius: 20px;
  padding: 15px;

  button {
    margin-top: 50px;

    margin-left: auto;
    margin-right: auto;
    background-color: #f66a6a;
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 120px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
  @media (max-width: 700px) {
    border: none;
  }
  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  .save {
    background: #41f08b;
  }

  button {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    background-color: #f66a6a;
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 120px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }
`;
