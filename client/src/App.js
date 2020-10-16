import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/bubblepage" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
