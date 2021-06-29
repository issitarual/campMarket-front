import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import UserContext from "./Context/UserContext";
import { useState } from "react";

import Products from "./Pages/Products";
import Category from "./Pages/Category";

function App() {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/vegetables">
            <Category name={"vegetables"}/>
          </Route>
          <Route path="/cold">
            <Category name={"cold products"}/>
          </Route>
          <Route path="/meat">
            <Category name={"meat"}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
