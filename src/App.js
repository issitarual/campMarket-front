import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import UserContext from "./Context/UserContext";
import { useState } from "react";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Category from "./Pages/Category";
import Product from "./Pages/Product";

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user: user || JSON.parse(localStorage.getItem("user")), setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/category/:categoryName" exact component={Category}/>
          <Route path="/product/:productId" exact component={Product}/>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
