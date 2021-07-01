import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import UserContext from "./Context/UserContext";
import CartContext from "./Context/CartContext";
import { useState } from "react";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Category from "./Pages/Category";
import Product from "./Pages/Product";

function App() {
  const [user, setUser] = useState();
  const [cart, setCart] = useState();
  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      <CartContext.Provider value={{cart, setCart}} >
        <BrowserRouter>
          <GlobalStyles />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/login" exact component={Login} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/vegetables">
              <Category name={"vegetables"}/>
            </Route>
            <Route path="/cold">
              <Category name={"cold products"} exact/>
            </Route>
            <Route path="/meat">
              <Category name={"meat"} exact/>
            </Route>
            <Route path="/product/:productId" exact>
              <Product/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
