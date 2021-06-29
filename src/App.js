import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import UserContext from "./Context/UserContext";
import { useState } from "react";

import Home from "./Component/Home/Home";
import Products from "./Pages/Products";

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Products} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
