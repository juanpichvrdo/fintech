import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Introduccion from "./Introduccion";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/introduccion" component={Introduccion} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
