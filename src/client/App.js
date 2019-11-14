import React from "react";
import { Switch, Route } from "react-router-dom";
import { Routes } from "../routes";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {Routes.map((r, ind) => (
          <Route
            key={ind}
            path={r.url}
            exact={r.exact}
            component={r.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
