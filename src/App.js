import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import UserContext from "./Context/UserContext";
import { useState } from "react";

import Home from "./Component/Home/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/Login" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
